<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="/"><img width="50" src="../assets/nmk.png" alt=""></a>
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="navbarColor01" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- //nav -->
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav ms-auto text-center">
                        <li class="nav-item m-2">
                            <router-link :to="{ name: 'home' }" class="nl p-3">Home
                            </router-link>
                        </li>
                        <li class="nav-item m-2">
                            <router-link :to="{ name: 'about' }" class="nl p-3">About Me
                            </router-link>
                        </li>
                        <li class="nav-item m-2">
                            <router-link :to="{ name: 'skills' }" class="nl p-3">Skills
                            </router-link>
                        </li>
                        <li class="nav-item m-2">
                            <router-link :to="{ name: 'portfolio' }" class="nl p-3">Portfolio
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!-- //offcanvas -->
                <div class="offcanvas offcanvas-start d-lg-none bg-dark" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                        <button type="button" id="btn-close" class="btn-close" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav ms-auto text-center">
                            <li class="nav-item m-2">
                                <router-link :to="{ name: 'home' }" @click="hideOffCanvas()" class="nl p-3">Home
                                </router-link>
                            </li>
                            <li class="nav-item m-2">
                                <router-link :to="{ name: 'about' }" @click="hideOffCanvas()" class="nl p-3">About Me
                                </router-link>
                            </li>
                            <li class="nav-item m-2">
                                <router-link :to="{ name: 'skills' }" @click="hideOffCanvas()" class="nl p-3">Skills
                                </router-link>
                            </li>
                            <li class="nav-item m-2">
                                <router-link :to="{ name: 'portfolio' }" @click="hideOffCanvas()" class="nl p-3">
                                    Portfolio
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
    setup() {
        function hideOffCanvas() {
            setTimeout(() => {
                document.getElementById('btn-close').click();
            }, 500)
        }
        return { hideOffCanvas }
    }
}
</script>

<style lang="scss" scoped>
.nl {
    text-decoration: none;
    color: rgb(159, 159, 159);
}

.router-link-active {
    color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity));
    // margin-top: 20px;
}
</style>