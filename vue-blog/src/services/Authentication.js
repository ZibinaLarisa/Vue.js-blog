import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().get('register', credentials)
  }
}

/* Authentication.register({
  mail: 'test@gmail.com',
  password: 'pass'
}) */
