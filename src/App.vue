<template>
  <div id="app">
    <form autocapitalize="none" autocomplete="off" autocorrect="off" spellcheck="false">
      <fieldset class="form-group">
        <h4>Choose a button</h4>
        <div class="row">
          <div class="col-9 col-sm-6 col-md-4 col-lg-2" v-for="type in types" :key="type.value">
            <div class="form-check">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="type" :value="type.value" v-model="options.type">{{ type.value | capitalize }}<br>
                <span aria-hidden="true"><github-button href="#" data-size="large" :data-icon="type.icon" :data-text="$options.filters.capitalize(type.value)"></github-button></span>
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <hr>
      <div class="row" v-if="options.type">
        <div class="col-12 col-sm-6 col-md-4">
          <h4>Button options</h4>
          <div class="form-group">
            <div class="input-group">
              <input ref="user" class="form-control" type="text" maxlength="39" placeholder=":user" autofocus="autofocus" :class="{ 'is-invalid': options.user !== '' && !isValidUser }" v-model="options.user">
              <div class="input-group-append input-group-prepend">
                <span class="input-group-text">/</span>
              </div>
              <input ref="repo" class="form-control" type="text" maxlength="100" placeholder=":repo" :disabled="options.type === 'follow'" :class="{ 'is-invalid': options.repo !== '' && !isValidRepo }" v-model="options.repo">
            </div>
          </div>
          <div class="form-group">
            <div class="checkbox">
              <label>
                <input type="checkbox" v-model="options.largeButton"> Large button
              </label>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" :disabled="options.type === 'download'" v-model="options.showCount"> Show count
              </label>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" v-model="options.standardIcon"> Standard icon
              </label>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-8">
          <h4>Preview and code</h4>
          <p>Try out your button, then copy and paste the code below into the HTML for your site.</p>
          <p :style="{ height: options.largeButton ? '28px' : '20px' }">
            <github-button v-bind="{ ...attrs, 'data-show-count': attrs['data-show-count'] && !timeoutID }"></github-button>
          </p>
          <div class="form-group">
            <snippet :code="aHTML"></snippet>
          </div>
          <div class="form-group">
            <snippet :code="scriptHTML"></snippet>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import './main.css'
import GithubButton from 'vue-github-button'
import Snippet from '@/components/Snippet'
import {
  aComment,
  scriptComment,
  scriptElement
} from '@/html'

export default {
  name: 'app',
  components: {
    GithubButton,
    Snippet
  },
  data () {
    return {
      types: [
        {
          value: 'follow',
          icon: 'octicon-mark-github'
        },
        {
          value: 'watch',
          icon: 'octicon-eye'
        },
        {
          value: 'star',
          icon: 'octicon-star'
        },
        {
          value: 'fork',
          icon: 'octicon-repo-forked'
        },
        {
          value: 'issue',
          icon: 'octicon-issue-opened'
        },
        {
          value: 'download',
          icon: 'octicon-cloud-download'
        }
      ],
      options: {
        user: '',
        repo: '',
        type: null,
        largeButton: false,
        showCount: false,
        standardIcon: false
      },
      scriptHTML: scriptComment + '\n' + scriptElement,
      timeoutID: 0
    }
  },
  watch: {
    'options.type' () {
      this.$nextTick(() => {
        if (document.activeElement !== this.$refs.user && document.activeElement !== this.$refs.repo) {
          if (this.options.type === 'follow' || !this.isValidUser || (this.isValidUser && this.isValidRepo)) {
            this.$refs.user.focus()
          } else {
            this.$refs.repo.focus()
          }
        }
      })
    },
    'attrs.href' () {
      if (this.attrs['data-show-count']) {
        clearTimeout(this.timeoutID)
        this.timeoutID = setTimeout(() => {
          this.timeoutID = 0
        }, 300)
      }
    }
  },
  computed: {
    isValidUser () {
      const user = this.options.user
      return user.length > 0 && user.length < 40 && !/[^A-Za-z0-9-]|^-|-$|--/i.test(user)
    },
    isValidRepo () {
      const repo = this.options.repo
      return repo.length > 0 && repo.length < 101 && !/[^\w-.]|\.git$|^\.\.?$/i.test(repo)
    },
    attrs () {
      const options = { ...this.options }

      if (!this.isValidUser || (!this.isValidRepo && options.type !== 'follow')) {
        options.user = 'ntkme'
        options.repo = 'github-buttons'
      }

      return {
        class: 'github-button',
        href: (() => {
          const base = 'https://github.com'
          const user = '/' + options.user
          const repo = user + '/' + options.repo
          switch (options.type) {
            case 'follow':
              return base + user
            case 'watch':
              return base + repo + '/subscription'
            case 'star':
              return base + repo
            case 'fork':
              return base + repo + '/fork'
            case 'issue':
              return base + repo + '/issues'
            case 'download':
              return base + repo + '/archive/master.zip'
            default:
              return base
          }
        })(),
        'data-text': (() => {
          return this.$options.filters.capitalize(options.type) + (options.type === 'follow' ? ' @' + options.user : '')
        })(),
        'data-icon': (() => {
          if (options.standardIcon) {
            return
          }
          switch (options.type) {
            case 'watch':
              return 'octicon-eye'
            case 'star':
              return 'octicon-star'
            case 'fork':
              return 'octicon-repo-forked'
            case 'issue':
              return 'octicon-issue-opened'
            case 'download':
              return 'octicon-cloud-download'
          }
        })(),
        'data-size': (() => {
          if (options.largeButton) {
            return 'large'
          }
        })(),
        'data-show-count': (() => {
          if (options.showCount) {
            switch (options.type) {
              case 'download':
                return
              default:
                return true
            }
          }
        })(),
        'aria-label': (() => {
          return this.$options.filters.capitalize(options.type) + (options.type === 'follow' ? ' @' + options.user : ' ' + options.user + '/' + options.repo) + ' on GitHub'
        })()
      }
    },
    aHTML () {
      const a = document.createElement('a')
      const attrs = this.attrs
      for (let key in attrs) {
        if (attrs[key] != null) {
          if (key === 'data-text') {
            a.textContent = attrs[key]
          } else {
            a.setAttribute(key, attrs[key])
          }
        }
      }
      return aComment + '\n' + a.outerHTML
    }
  },
  filters: {
    capitalize (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style scoped>
p {
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
