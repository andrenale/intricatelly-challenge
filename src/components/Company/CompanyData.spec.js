import { shallowMount } from '@vue/test-utils'
import CompanyData from './CompanyData.vue'
// import CompanyData from './src/components/Company/CompanyData.vue'

describe('CompanyData', () => {
  // your tests go here

  it('Show errors if form is invalid', () => {
    const wrapper = shallowMount(CompanyData, {
      data() {
        return {
          company: {},
          errors: {}
        }
      }
    })
    wrapper.vm.validateForm(new Event(null));

    // confirm that errors are showed
    expect(wrapper.vm.errors != []).toBe(true)


    wrapper.setData({
      company: {name: "Company Name", company_spend: 500, company_spend_ability: 1500},
      errors: {}
    })

    wrapper.vm.validateForm(new Event(null))
    // confirm that errors are showed
    expect(wrapper.vm.errors == {}).toBe(false)

  })
})