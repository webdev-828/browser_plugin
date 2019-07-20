<template>
    <div>
        <a 
            v-for="nav in navs" 
            :key="nav.navID"
            :href="nav.navLink"
            :style="{backgroundColor: nav.backColor}"
            :class="[nav.isActive ? activeClass : '', nonactiveClass]"
            @click="navClick(nav)"
            @mouseover="navOver(nav)"
            @mouseleave="navBlue(nav)"
        >
            <i aria-hidden="true" :class="iconClass">{{nav.navIcon}}</i>
        </a>
    </div>    
</template>

<script>
export default {
    data: ()=> ({
        navs: [
            {
                navID: 0,
                isActive: true,
                backColor: '',
                navLink: "#/home",
                navIcon: "home"
            },
            {
                navID: 1,
                isActive: false,
                backColor: '',
                navLink: "#/jobs",
                navIcon: "work"
            },
            {
                navID: 2,
                isActive: false,
                backColor: '',
                navLink: "#/contacts",
                navIcon: "contacts"
            },
            {
                navID: 3,
                isActive: false,
                backColor: '',
                navLink: "#/activity",
                navIcon: "list"
            }
        ],
        activeClass: [
            'router-link-exact-active', 'router-link-active'
        ],
        nonactiveClass: '',
        iconClass: [
            'v-icon', 'material-icons', 'theme--light'
        ]
    }),
    methods:{
        navClick(nav) {
            for (let index = 0; index <= 3; index++) {
                if (index == nav.navID) {
                    this.navs[index].isActive = true;
                    this.navs[index].backColor = "";
                    this.$store.commit('setComp', index);
                } else {
                    this.navs[index].isActive = false;
                }       
            }
        },
        navOver(nav) {
            if (nav.isActive) {
                return;
            }
            for (let index = 0; index <= 3; index++) {
                if (index == nav.navID) {
                    this.navs[index].backColor = "grey";
                }
                else {
                    this.navs[index].backColor = "";
                }                
            }
        },
        navBlue(nav) {
            this.navs[nav.navID].backColor = "";
        }
    }
}
</script>

<style scoped>
    #nav a.router-link-active {
        background: green;
        color: #e5e5e5;
    }
    #nav a {
        display: block;
        text-decoration: none;
        width: 100%;
        border-bottom: 1px solid #fff;
        color: #e5e5e5;
        height: 56px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .application a {
        cursor: pointer;
    }
    #nav a.router-link-active i {
        color: #e5e5e5;
    }
    #nav a i {
        color: #e5e5e5;
    }
    .theme--light.v-icon {
        color: rgba(0,0,0,.54);
    }
</style>
