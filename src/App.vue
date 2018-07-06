<template>
  <div id="app">
    <div class="index layout">
        <Layout>
            <HearderBar></HearderBar>
            <Layout>
                <Content>
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
  </div>
</template>

<script>
  import HearderBar from './components/headerBar/headerBar'
export default {
  name: 'App',
  components : {
      HearderBar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
