
import store from './store.js'

describe('store.actions', () => {
  // your tests go here

  it('Check if is returning the correct length', () => {
    const companies = store.getters.getCompanies
    expect(companies).toHaveLength(0)


    store.commit('addNewCompany', {name: 'company'})
    const companiesLen = store.getters.getCompanies
    expect(companiesLen).toHaveLength(1)

  })
})