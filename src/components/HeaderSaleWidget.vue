<template>
    <div class="sale-widget">
        <div class="widget__demos">
            <font-awesome-icon class="text-[14px]" icon="fa-solid fa-file" /> 
            Demos
        </div>
        <div class="widget__on-sale">
            <div class="widget__sale-price">{{ salePrice }}</div> 
            On Sale 
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'HeaderSaleWidget',
    computed: {
        ...mapGetters(["salePrice"])
    }
}
</script>

<style lang="scss" scoped>
.sale-widget {
    @apply hidden md:block absolute z-20 right-3 top-24;

    .widget__demos, .widget__on-sale {
        @apply w-11 h-11 p-1 bg-white text-scorpion flex flex-col justify-end items-center rounded  text-[10px];
    }

    .widget__demos {
        @apply mb-2;
    }

    .widget__on-sale {
        
        .widget__sale-price {
            @apply text-keppel text-[16px];

            &:before {
                @apply content-['$'] text-[10px] relative bottom-1;
            }
        }
    }
}
</style>