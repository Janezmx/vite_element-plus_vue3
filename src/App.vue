<template>
  <el-config-provider :locale="locale">
    <el-row class="body">
      <el-col style="width: 200px;" class="menu-col">
        <Menus></Menus>
      </el-col>
      <el-col style="width: calc(100% - 200px);" class="page menu-col">
        <Header></Header>
        <!--&lt;!&ndash;相同path不同query刷新页面&ndash;&gt;-->
        <div style="padding: 10px;">
          <router-view :key="$route.fullPath"/>
        </div>
      </el-col>
    </el-row>
  </el-config-provider>
</template>

<script setup lang="ts">
  import { userInfoStore } from '@/store/user'
  import { fetchUserInfo } from '@/plugin/http/api/user'
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'
  import useCurrentInstance from '@/plugin/global'
  // import script from 'busuanzi.pure.js'
  const locale = ref(zhCn)
  const userStore = userInfoStore()
  const { Global } = useCurrentInstance()
  // const route = useRoute()
  // watch(() => route.fullPath, () => {
  //   console.log('watch', route.fullPath)
  //   script.fetch() // 总访问量也增加，并不是只计算当前页
  // })
  onBeforeMount(() => {
    fetchUserInfo().then((res: any) => {
      userStore.updateInfo(res.data)
    }).catch((e: any) => {
      Global.$message({
        type: 'error',
        message: '获取登录信息失败，原因:' + e.message
      })
    })
  })
</script>
<style rel="stylesheet/less" lang="less">
  @header-height: 50px;
  #app {
    font-family: Microsoft YaHei, 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    overflow-y: hidden;
    .header {
      height: @header-height;
      line-height: @header-height;
      .info-bar .el-dropdown {
        vertical-align: middle;
      }
    }
    .body {
      background-color: rgb(50, 65, 87);
      height: 100%;
      .menu-col {
        flex: none !important;
      }
      .page {
        height: 100%;
        background-color: white;
        overflow-y: auto;
        .breadcrumb {
          margin: 10px 20px;
          .el-breadcrumb {
            font-size: 14px;
          }
        }
        .content {
          margin-top: 20px;
        }
      }
    }
    .el-dialog__footer {
      button {
        width: 100px;
      }
    }
  }
</style>
