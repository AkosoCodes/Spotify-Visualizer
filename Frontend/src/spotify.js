import axios from 'axios';

const LOCAL_STORAGE_KEYS = {
  accessToken: 'spotify_access_token',
  refreshToken: 'spotify_refresh_token',
  expireTime: 'spotify_token_expire_time',
  timestamp: 'spotify_token_timestamp',
}


const LOCAL_STORAGE_VALUES = {
  accessToken: window.localStorage.getItem(LOCAL_STORAGE_KEYS.accessToken),
  refreshToken: window.localStorage.getItem(LOCAL_STORAGE_KEYS.refreshToken),
  expireTime: window.localStorage.getItem(LOCAL_STORAGE_KEYS.expireTime),
  timestamp: window.localStorage.getItem(LOCAL_STORAGE_KEYS.timestamp),
}

const getAccessToken = () => {

  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);

  const queryParams = {
    [LOCAL_STORAGE_KEYS.accessToken]: urlParams.get('access_token'),
    [LOCAL_STORAGE_KEYS.refreshToken]: urlParams.get('refresh_token'),
    [LOCAL_STORAGE_KEYS.expireTime]: urlParams.get('expires_in'),
  };

  const hasError = urlParams.get('error');

  if (hasError || hasTokenExpired() || LOCAL_STORAGE_VALUES.accessToken === 'undefined') {
    refreshToken();
  }

  // If there is a valid access token in localStorage, use that
  if (LOCAL_STORAGE_VALUES.accessToken && (LOCAL_STORAGE_VALUES.accessToken !== 'undefined')) {
    return LOCAL_STORAGE_VALUES.accessToken;
  }

  // If there is a token in the URL query params, user is logging in for the first time
  if (queryParams[LOCAL_STORAGE_KEYS.accessToken]) {

    // Store the query params in localStorage
    for (const property in queryParams) {
      window.localStorage.setItem(property, queryParams[property]);
    }

    // Set timestamp
    window.localStorage.setItem(LOCAL_STORAGE_KEYS.timestamp, Date.now());


    // Return access token from query params
    return queryParams[LOCAL_STORAGE_KEYS.accessToken];
  }

  // We should never get here!
  return false;
}

const refreshToken = async () => {
  try {
    // Logout if there's no refresh token stored or we've managed to get into a reload infinite loop
    if (!LOCAL_STORAGE_VALUES.refreshToken ||
            LOCAL_STORAGE_VALUES.refreshToken === 'undefined' ||
            (Date.now() - Number(LOCAL_STORAGE_VALUES.timestamp) / 1000) < 1000
    ) {
      console.error('No refresh token available');
      logout();
    }

    // Use `/refresh_token` endpoint from our Node app
    const { data } = await axios.get(`/refresh_token?refresh_token=${LOCAL_STORAGE_VALUES.refreshToken}`);

    // Update localStorage
    window.localStorage.setItem(LOCAL_STORAGE_KEYS.accessToken, data.access_token);
    window.localStorage.setItem(LOCAL_STORAGE_KEYS.timestamp, Date.now());



    window.location.reload();
  } catch (error) {
    console.error(error);
  }
}

const hasTokenExpired = () => {

  const { accessToken, timestamp, expireTime } = LOCAL_STORAGE_VALUES;
  if (!accessToken || !timestamp) {
    return false;
  }
  const millisecondsElapsed = Date.now() - Number(timestamp);
  return (millisecondsElapsed / 1000) > Number(expireTime);
}

export const logout = () => {
  // Clear all localStorage items
  for (const property in LOCAL_STORAGE_KEYS) {
    window.localStorage.removeItem(LOCAL_STORAGE_KEYS[property]);
  }
  // Navigate to homepage
  window.location = window.location.origin;
}

export const accessToken = getAccessToken();

/**
 * Axios global request headers
 * https://github.com/axios/axios#global-axios-defaults
 */
axios.defaults.baseURL = 'https://api.spotify.com/v1';
axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
axios.defaults.headers['Content-Type'] = 'application/json';

/**
* Get Current User's Profile
* https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-current-users-profile
* @returns {Promise}
*/
export const getCurrentUserProfile = () => axios.get('/me');

/**
 * Get a List of Current User's Playlists
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-list-of-current-users-playlists
 * @returns {Promise}
 */
export const getCurrentUserPlaylists = (limit = 20) => {
  return axios.get(`/me/playlists?limit=${limit}`);
};

/**
 * Get a User's Top Artists and Tracks
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-top-artists-and-tracks
 * @param {string} time_range - 'short_term' (last 4 weeks) 'medium_term' (last 6 months) or 'long_term' (calculated from several years of data and including all new data as it becomes available). Defaults to 'short_term'
 * @returns {Promise}
 */
export const getTopArtistsShort = (time_range = 'short_term') => {
  return axios.get(`/me/top/artists?time_range=${time_range}`);
};
export const getTopArtistsMedium = (time_range = 'medium_term') => {
  return axios.get(`/me/top/artists?time_range=${time_range}`);
};
export const getTopArtistsLong = (time_range = 'long_term') => {
  return axios.get(`/me/top/artists?time_range=${time_range}`);
};
export const getTopTracksShort = (time_range = 'short_term') => {
  return axios.get(`/me/top/tracks?time_range=${time_range}`);
};
export const getTopTracksMedium = (time_range = 'medium_term') => {
  return axios.get(`/me/top/tracks?time_range=${time_range}`);
};
export const getTopTracksLong = (time_range = 'long_term') => {
  return axios.get(`/me/top/tracks?time_range=${time_range}`);
};