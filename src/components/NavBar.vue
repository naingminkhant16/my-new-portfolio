<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="/">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link :to="{ name: 'home' }" class="nl">Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'about' }" class="nl">About Me
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'skills' }" class="nl">Skills
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'portfolio' }" class="nl">Portfolio
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
.nl {
    padding: 10px;
    text-decoration: none;
    color: rgb(159, 159, 159);
}

.router-link-active {
    color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity));
    // color: #fff;
    margin-top: 20px;
}
</style>