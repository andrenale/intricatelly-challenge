<template>
    <div class="content">
        <div class="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam. 
        </div>
        <form @submit="validateForm">
            <div class="input-container">
                <div class="label">COMPANY NAME</div>
                <input type="text" name="company_name" v-model="company.name" placeholder="e.g. Your Company Name">
                <div class="errors">
                    <span class="error" v-for="error in errors.company_name" :key="'error_company_name' + error">{{error}}</span>
                </div>
            </div>
            <div class="input-container">
                <div class="label"> COMPANY SPEND - {{company.spend}}</div>
                <input type="text" name="company_spend" v-model="company.spend" placeholder="e.g. $150.000" @keypress="stripTheGarbage($event)"
                    @blur="formatDollars()" :max="company.spend_ability">
                <div class="errors">
                    <span class="error" v-for="error in errors.company_spend" :key="'error_company_spend' + error">{{error}}</span>
                </div>
            </div>
            <div class="input-container">
                <div class="label">COMPANY SPEND ABILITY</div>
                <input type="text" name="company_spend_ability" v-model="company.spend_ability" placeholder="e.g. $150.000 - $300.000"
                    @keypress="stripTheGarbage($event)" @blur="formatDollars()" :min="company.spend">
                <div class="errors">
                    <span class="error" v-for="error in errors.company_spend_ability" :key="'error_company_spend_ability' + error">{{error}}</span>
                </div>
            </div>
            <div class="input-container">
                <div class="label">NOTES</div>
                <textarea name="company_notes" rows="8"  placeholder="e.g. Good Tech Company"  v-model="company.notes"
                    @click="$refs.modalNotes.openModal(company)" @focus="$refs.modalNotes.openModal(company)">
                </textarea>
                <div class="errors">
                    <span class="error" v-for="error in errors.company_notes" :key="'error_company_notes' + error">{{error}}</span>
                </div>
            </div>
        </form>

        <ModalNotes @save="save" ref="modalNotes"/>
    </div>
</template>

<script>
import ModalNotes from './ModalNotes.vue'

export default {
    data() {
        return {
            company: {},
            errors: {},
        }
    },
    computed: {
        companies(){
            return this.$store.getters.getCompanies
        }
    },
    components: {
        ModalNotes
    },
    methods: {
        validateForm(e) {
            this.errors = {};

            function createArrayOrPush(this_, field, value) {
                if (this_.errors[field]) {
                    this_.errors[field].push(value)
                } else {
                    this_.errors[field] = [value]
                }
            }

            if (!this.company.name) {
                createArrayOrPush(this, 'company_name', 'This field is required.');
            }

            if (!this.company.spend) {
                createArrayOrPush(this, 'company_spend', 'This field is required.');
            }

            if (!this.company.spend_ability) {
                createArrayOrPush(this, 'company_spend_ability', 'This field is required.');
            }

            if (this.company.spend && this.company.spend_ability) {
                if (parseFloat(this.company.spend) > parseFloat(this.company.spend_ability)) {
                    createArrayOrPush(this, 'company_spend_ability', 'This value has to be greater then be company spend.');
                    createArrayOrPush(this, 'company_spend', 'This value has to be less then be company spend.');
                }
            }
            
            if (!this.errors.company_name && !this.errors.company_spend && !this.errors.spend_ability) {
                return true
            }

            e.preventDefault();
        },
        stripTheGarbage(e) {
            if (e.keyCode < 48 && e.keyCode !== 46 || e.keyCode > 59) {
                e.preventDefault()
            }
        },
        formatDollars() {
            if (this.company.spend != '' || this.company.spend_ability) {
                var num = this.price;
                
                num = Number(num);
                        
                var countDecimals = function (value) {
                if(Math.floor(value) === value) return 0;
                    return value ? value.toString().split(".")[1].length : 0; 
                }
                
                var decimal = countDecimals(num);
                
                if (decimal < 2) {
                    num = num.toFixed(2)
                }
                
                if (decimal > 2) {
                    num = num.toFixed(decimal)
                }
                
                if (parseInt(num) < 1) {
                    num = "." + String(num).split(".")[1];
                }

                this.price = num;
            }
        },
        save() {
            this.company.spend = parseFloat(this.company.spend)
            this.company.spend_ability = parseFloat(this.company.spend_ability)
            if (this.validateForm(new Event(null))) {
                this.$store.commit('addNewCompany', this.company)
                this.$store.commit('showToast', {message: 'Saved successfully', duration: 3})
            }
        }

    }
}
</script>

<style lang="scss" scoped>
    .content {
        border: 1px solid #d6d7e7;
        border-radius: 3px;
        margin-left: 20px;
        margin-top: 0px;
        padding: 20px;
        flex: 1;
        flex-direction: column;
    }

    .info {
        font-size: 14px;
        line-height: 23px;
        margin-bottom: 20px;
        color: rgb(78, 76, 85);
    }

    .input-container {
        display: block;
        flex-direction: column;

        .label {
            color: rgb(173, 169, 184);
            font-size: 12px;
            font-weight: 500;
            margin: 3px 0;
        }

        input {
            border: 1px solid #d6d7e7;
            border-radius: 4px;
            height: 26px;
            width: 260px;
            padding: 4px 10px;
            box-shadow: 0 0 12px 0px #d4d4d4;
        }
        input::placeholder {
            color: rgb(191, 187, 202);
        }

        textarea {
            border: 1px solid #d6d7e7;
            border-radius: 4px;
            padding: 4px 10px;
            width: 96%;
            box-shadow: 0 0 12px 0px #d4d4d4;
            outline: none;
        }

        textarea::placeholder {
            font-family: 'roboto';
            color: rgb(191, 187, 202);
        }

        .errors {
            height: 30px;
            font-size: 10px;
            padding: 2px 0;

            .error {
                color: red;
            }
        }
    }
</style>
