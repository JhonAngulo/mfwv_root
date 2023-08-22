export const importmap = {
  local: {
    commons_module: 'commons_module@http://localhost:9999/commons_module.js'
  },
  develop: {
    commons_module:
      'commons_module@https://spa-develop.finkargo.com/commons/commons_module.js'
  },
  testing: {
    commons_module:
      'commons_module@https://spa-testing.finkargo.com/commons/commons_module.js'
  },
  staging: {
    commons_module:
      'commons_module@https://spa-staging.finkargo.com/commons/commons_module.js'
  },
  prod: {
    commons_module:
      'commons_module@https://spa-production.finkargo.com/commons/commons_module.js'
  }
}
