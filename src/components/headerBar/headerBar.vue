<template>
	<Header class="top-header-bar">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Button type="primary" icon="image" @click="createPdf">生成pdf</Button>
            </div>
        </Menu>
    </Header>
</template>
<script>
    import html2canvas from 'html2canvas';
    import * as jsPDF from 'jspdf'
    export default {
      name: 'HelloWorld',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },
      methods:{
        createPdf(){
            console.log("aaa")
            html2canvas(document.querySelector("#resumeBox")).then(canvas => {
                  //返回图片dataURL，参数：图片格式和清晰度(0-1)
                  var pageData = canvas.toDataURL('image/jpeg', 1.0);

                  //方向默认竖直，尺寸ponits，格式a4[595.28,841.89]
                  var pdf = new jsPDF('', 'pt', 'a4');

                  //addImage后两个参数控制添加图片的尺寸，此处将页面高度按照a4纸宽高比列进行压缩
                  pdf.addImage(pageData, 'JPEG', 0, 0, 595.28, 592.28/canvas.width * canvas.height );

                  pdf.save('简历.pdf');
            });
        }
      }
    }
</script>
<style scoped lang="scss">
    .top-header-bar {
        .layout-nav{
            text-align: right;
        }
    }
</style>