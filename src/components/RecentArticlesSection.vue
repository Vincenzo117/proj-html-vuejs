<template>
  <section id="recent-articles">
    <div class="section-wrapper">
      <div class="section__header">
        <div class="section__header-text">
          <h1 class="section__title">Recent Articles</h1>
          <h3 class="section__subtitle">Read the latest entries</h3>
        </div>
        <ActionButton text="All Articles" color="yellow" />
      </div>

      <div class="section__body">
        <div
          :class="[
            'article-card',
            article.id == 1 ? 'article-card--big' : 'article-card--small',
          ]"
          v-for="article in recentArticles.slice(0, 3)"
          :key="article.id"
        >
          <div class="article-card__wrapper">
            <figure class="article-card__thumb">
              <img :src="article.thumb" alt="" />
            </figure>
            <h3 class="article-card__title">{{ article.title }}</h3>
            <div class="article-card__info">
              <div v-if="article.id == 1">
                By {{ article.author }} | {{ article.date }} | Ctegories:
                <span v-for="(category, i) in article.categories" :key="i">
                  {{ category }}
                </span>
              </div>
              <div v-if="article.id != 1">
                {{ article.date }} | {{ article.commentsNumber }} Comments
              </div>
            </div>
            <p class="article-card__content" v-if="article.id == 1">
              {{ article.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ActionButton from "./ActionButton.vue";

export default {
  name: "RecentArticlesSection",
  components: {
    ActionButton,
  },
  computed: {
    ...mapGetters(["recentArticles"]),
  },
};
</script>

<style lang="scss" scoped>
#recent-articles {
  @apply bg-dawnPink;
  .section-wrapper {
    @apply pt-8 pb-12 px-10 md:px-44 2xl:container 2xl:px-44;

    .section__header {
      @apply flex justify-between items-center gap-3 flex-wrap mb-5;

      .section__header-text {
        .section__title {
          @apply text-[30px] font-serif font-extralight;
        }

        .section__subtitle {
          @apply text-keppel text-[14px] uppercase font-semibold;
        }
      }
    }

    .section__body {
      @apply relative;
      &::after {
        @apply content-[''] clear-both block;
      }
      .article-card {
        @apply relative z-20;
        &.article-card--big {
          @apply w-full lg:w-3/5 lg:pr-6 mb-8 lg:mb-0 float-left;

          .article-card__wrapper {
            @apply p-6 sm:p-8 lg:h-[600px] xl:h-[780px] bg-white;

            .article-card__thumb {
              @apply mb-4;
            }

            .article-card__title {
              @apply text-[24px] font-medium mb-1;
            }

            .article-card__info {
              @apply text-[12px] mb-4;
            }

            .article-card__content {
              @apply text-[14px];
            }
          }
        }

        &.article-card--small {
          @apply w-full mb-8 sm:mb-0 sm:w-1/2 lg:w-2/5 float-right;

          .article-card__wrapper {
            @apply p-6 sm:p-8 sm:h-[300px]  xl:h-[390px] bg-white;

            .article-card__thumb {
              @apply mb-2;
            }

            .article-card__title {
              @apply text-[24px] font-medium mb-1;
            }

            .article-card__info {
              @apply text-[12px];
            }
          }
        }
      }
    }
  }
}
</style>