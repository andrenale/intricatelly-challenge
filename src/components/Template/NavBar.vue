<template>
    <div class="bar">
        <img src="../../images/navbar/logo-pink@2x.png" alt="">

        <div class="search-container">
            <img src="../../images/navbar/search@2x.png" alt="">
            <input placeholder="Search Companies">
        </div>

        <div class="or">OR</div>


        <div class="actions">
            <button class="highlighted">
                NEW SMARTLIST
            </button>

            <button>
                PROSPECT
                <img src="../../images/navbar/arrow-down@2x.png" alt="">
            </button>
            <button>
                ALERT
                <img src="../../images/navbar/arrow-down@2x.png" alt="">
            </button>
            <button>
                LEARN
                <img src="../../images/navbar/arrow-down@2x.png" alt="">
            </button>
        </div>

        <div class="spacer"></div>

        <img class="browser" src="../../images/navbar/default@2x.png" alt="">
        <img class="profile" src="../../images/navbar/group@2x.png" alt="">

    </div>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
    .bar {
        background-color: #3a4783;
        display: flex;
        flex-direction: row;
        height: 40px;
        padding: 14px 60px;

        img {
            height: 100%;
        }
    }

    .search-container {
        background-color: #2e3a6d;
        padding: 4px;
        margin: 0 0 0 40px ;
        display: flex;
        flex-direction: row;
        align-content: center;
        border-radius: 6px;

        img {
            height: 32px;
        }

        input {
            background-color: #2e3a6d;
            border: none;
            color: white;
            outline: none;
            width: 280px;
        }

        input::placeholder{
            color: white;
        }
    }

    .or {
        color: white;
        margin: 0 18px;
        align-self: center;
    }

    .actions {
        display: flex;
        flex-direction: row;

        button {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            background-color: #3a4783;
            color: white;
            border: none;
            outline: none;
            margin: 0 12px 0 0;
            border-radius: 4px;
            padding: 0 2px 0 12px;

            img {
                height: 32px;
            }

            &:hover {
                cursor: pointer;
                background-color: #48579b;
            }

            &.highlighted {
                padding: 0 12px;
                background-color: #48579b;
                cursor: pointer;
            }
        }
    }

    .spacer {
        display: flex;
        flex-direction: row;
        flex: 1;
    }

    .browser {
        margin: 0 10px;
    }


</style>
