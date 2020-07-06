import { endpoints } from 'shared/utils/endpoints'

const buildUrl = (endpoint, params) => {
  let service = endpoints.find(function (element) {
    return element.name === endpoint
  })
  let url = new URL(service.endpoint)
  if (params) {
    Object.keys(params).forEach(key => {
      if (params[key] !== '') url.searchParams.append(key, params[key])
    })
  }
  return url
}

const status = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject('MESSAGE.SYSTEM_ERROR')
  }
}

const json = response => response.json()

export const getService = (endpoint, params) => {
  let url = buildUrl(endpoint, params)
  return fetch(url, {
    method: 'GET',
  })
    .then(status)
    .then(json)
}
