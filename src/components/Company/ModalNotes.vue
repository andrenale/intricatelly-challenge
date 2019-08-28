<template>
    <div id="modal-notes" class="modal">

        <div class="modal-content">
            
            <div class="input-container">
                <div class="label">
                    ADDITIONAL NOTES
                    <span class="close" @click="closeModal">&times;</span>
                </div>
                <textarea v-if="company" id="additional_notes" name="company_notes" v-model="company.notes" rows="8"  placeholder="e.g. Good Tech Company">
                </textarea>
                <div class="errors">
                </div>
            </div>

            <div class="button-container">
                <button @click="save">Save</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {company: null}
    },
    methods: {
        openModal(company) {
            var modal = document.getElementById("modal-notes");
            this.company = company;

            modal.style.display = "block";

            setTimeout(() => {
                document.getElementById('additional_notes').focus();
            }, 100)
        },
        closeModal() {
            var modal = document.getElementById("modal-notes");
            modal.style.display = "none";
        },
        save() {
            var modal = document.getElementById("modal-notes");
            modal.style.display = "none";
            this.$emit('save')
        }
    }
}
</script>

<style lang="scss" scoped>
    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
    }

    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        box-shadow: 0 0 8px #565656;
        border-radius: 3px;
        width: 40%;

        .input-container {
            display: block;
            flex-direction: column;

            .label {
                color: rgb(173, 169, 184);
                font-size: 12px;
                font-weight: 500;
                margin: 0 0 16px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }

            textarea {
                border: 1px solid #d6d7e7;
                border-radius: 4px;
                padding: 4px 10px;
                width: 96%;
                box-shadow: 0 0 12px 0px #d4d4d4;
            }

            textarea::placeholder {
                font-family: 'roboto';
                color: rgb(191, 187, 202);
            }

            .errors {
                height: 30px;
                color: red;
                font-size: 8px;
            }
        }
    }

    .close {
        color: #e4e4e4;
        float: right;
        font-size: 23px;
        font-weight: 400;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

    .button-container {
        text-align: end;
    }

    button {
        padding: 7px 32px;
        background-color: #5c6999;
        font-weight: 500;
        font-family: 'roboto';
        color: white;
        text-transform: uppercase;
        border: 1px solid;
        border-radius: 4px;
        font-size: 12px;
    }
</style>

