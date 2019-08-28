<template>
    <div class="company">
        <div class="location">Home&nbsp&nbsp&nbsp&nbsp/&nbsp&nbsp&nbsp&nbsp{{$route.name}}</div>
        <div class="content">
            <div class="nav">
                <div class="item" @click="changeRoute('COMPANY DATA')" :class="{'active': $route.name == 'COMPANY DATA'}">COMPANY DATA</div>
                <div class="item" @click="changeRoute('COMPANY TABLE')" :class="{'active': $route.name == 'COMPANY TABLE'}">COMPANY TABLE</div>
                <div class="item" @click="changeRoute('COMPANY PAGE')" :class="{'active': $route.name == 'COMPANY PAGE'}">COMPANY PAGE</div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        // Component router-link dont working, then I used programatically
        changeRoute(routeName) {
            this.$router.push({ name: routeName});
        }
    }
}
</script>

<style lang="scss" scoped>
    .company {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 75%;
        margin: 0 auto;
        padding: 20px;
    }

    .location {
        font-size: 12px;
        color: grey;
        text-transform: uppercase;
    }

    .content {
        margin-top: 20px;
        display: flex;
        flex-direction: row;

        .nav {
            background-color: white;
            border: 1px solid #d6d7e7;
            border-radius: 2px;
            width: 220px;
            height: max-content;

            .item {
                font-size: 12px;
                font-weight: 500;
                padding: 20px;
                border-bottom: 1px solid #d6d7e7;
                align-items: center;
                color: #3a4783;


                &:hover {
                    cursor: pointer;
                    background-color: whitesmoke;
                }
            }

            .item:last-of-type {
                border-bottom: none;
            }


            .active, .router-link-active {
                border-left: 2px solid #3a4783;
                color: #575765;
                background-color: #f7f7f7;
            }
        }
    }
</style>

