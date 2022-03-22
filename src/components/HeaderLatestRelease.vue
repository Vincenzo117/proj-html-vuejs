<template>
  <div class="latest-release-widget">
     <figure class="widget__thumb">
         <img :src="latestRelease.thumb" alt="">
     </figure>
     <div class="widget__info">
         <h4 class="widget__title">{{ latestRelease.title }}</h4>
         <h5 class="widget__author">{{ latestRelease.author }}</h5>
         <p class="widget__description">{{ latestRelease.description }}</p>
     </div>
     <div class="widget__buy-options">
        <a :href="latestRelease.amazon" class="widget__buy-amazon">
           <font-awesome-icon icon="fa-brands fa-amazon" /> Buy On Amazon
        </a>
        <a :href="latestRelease.appStore" class="widget__buy-appstore">
            <font-awesome-icon icon="fa-brands fa-apple" /> Buy On AppStore
        </a>
     </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
 name: 'HeaderLatestRelease',
 computed: {
     ...mapGetters(["latestRelease"])
 }
}
</script>

<style lang="scss" scoped>
.latest-release-widget {
    @apply px-10 pt-8 pb-6 bg-white absolute bottom-0 right-0  flex flex-wrap z-30 max-w-[400px];
    .widget__thumb{
        @apply w-1/2;
    }
    .widget__info {
        @apply w-1/2;
        .widget__title {
            @apply text-[14px] font-serif font-semibold mb-2;
        }
        .widget__author {
            @apply text-[10px] uppercase font-bold text-saffron mb-3;
        }
        .widget__description {
            @apply text-[10px] text-osloGray;
        }
    }
    .widget__buy-options {  
        @apply w-full flex items-center justify-between border-[1px] border-keppel rounded;

        .widget__buy-amazon, .widget__buy-appstore {
            @apply grow text-[10px] text-center py-2 hover:bg-keppel/10 transition-all;
        }

        .widget__buy-amazon {
            @apply border-r-[1px] border-keppel;
        }
    }   
}
</style>