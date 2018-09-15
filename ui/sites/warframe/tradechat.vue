<template>
  <div>
    <navigation/>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <section class="main col-b-4">
        <div class="container">
          <h2>Global Trade Chat</h2>
          <p>
            Real-time ingame trade chat. Very BETA, just added this because
            anthouse wanted it.
          </p>
          <div ref="chat" class="chat" tag="div">
            <div v-for="message in messages" :key="`${message.user}${message.item}${message.component}${message.createdAt}`" class="message">
              <div class="out-of-bounds">
                <span class="date">{{ moment(new Date(message.createdAt)).format('HH:MM') }} NA</span>
              </div>
              <span class="user">{{ message.user }}</span>
              <p>{{ message.message }}</p>
            </div>
          </div>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import navigation from 'src/components/ui/nav/warframe/items.vue'
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import search from 'src/components/search/input.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import moment from 'moment'

export default {
  components: {
    navigation,
    appContent,
    sidebar,
    sidebarSearch,
    search
  },

  computed: {
    messages () {
      return this.$store.state.tradechat.messages
    }
  },

  beforeMount () {
    this.$cubic.subscribe('/warframe/v1/orders/tradechat', order => {
      this.$store.commit('addTradechatMessage', order)
      const chat = this.$refs.chat
      chat.scrollTop = chat.scrollHeight
    })
  },

  mounted () {
    const chat = this.$refs.chat
    chat.scrollTop = chat.scrollHeight
  },

  beforeDestroy () {
    this.$cubic.unsubscribe('/warframe/v1/orders/tradechat')
  },

  async asyncData () {
    const messages = await this.$cubic.get('/warframe/v1/orders/tradechat')
    this.$store.commit('setTradechatMessages', messages)
  },

  methods: {
    moment (date) {
      return moment(date)
    }
  },

  storeModule: {
    name: 'tradechat',
    state: {
      messages: []
    },
    mutations: {
      addTradechatMessage (state, message) {
        state.messages.push(message)
        if (state.messages.length >= 100) {
          state.messages.shift()
        }
      },
      setTradechatMessages (state, messages) {
        state.messages = messages
      }
    }
  }
}
</script>



<style lang='scss' scoped>
@import '~src/styles/partials/importer';

h2 {
  margin-bottom: 40px;
}
.chat {
  display: block;
  border-radius: 2px;
  min-height: 500px;
  max-height: calc(100vh - 400px);
  overflow-y: auto;
  overflow-x: hidden;
}
.message {
  padding: 0 0 20px;
  margin: 20px 0;
  border-bottom: 1px solid $color-subtle-dark;
  transition: all 1s;
  @include ease-out(1s);

  span {
    display: inline-block;
    font-size: 0.85em;
  }
  .out-of-bounds {
    display: inline-block;
    position: relative;
  }
  .user {
    color: $color-primary-subtle;
    font-family: 'Circular';
    font-size: 0.9em;
    margin-right: 5px;
  }
  .date {
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid $color-subtle;
  }
  p {
    margin-top: 8px;
    color: white;
    margin-left: 83px;

    @media (max-width: $breakpoint-s) {
      margin-left: 0;
    }
  }
}
.chat-move {
  transition: transform 1s;
}
</style>
