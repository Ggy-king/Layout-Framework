<!-- 底部免责声明 -->
<script setup lang="ts">

import IconEmail from'@/components/icons/IconEmail.vue'
import IconPhone from '@/components/icons/IconPhone.vue'
import IconQQ from'@/components/icons/IconQQ.vue'
import IconWeixin from'@/components/icons/IconWeixin.vue'
import IconFunny from'@/components/icons/IconFunny.vue'

</script>

<template>
  <div class="footer">
    <div class="center">
      <div class="head">

        <div class="statement">
          <div>免责声明：</div>
          <div><span>本网站为作者个人学习与实践之用，旨在分享与交流知识，所有内容均不涉及任何商业活动或盈利目的，完全是自己练习之用。</span>
                我们尊重并保护所有原创作者的知识产权，确保网站上发布的内容（包括但不限于文字、图片、视频等）均来源于公开合法渠道，
                并已尽力核实其版权归属及授权情况。若您发现本网站上有任何侵犯您合法权益的内容，请立即通过以下联系方式通知我们，
                我们将尽快核实并做相应处理。请注意，本网站所提供的信息仅供参考，不构成任何专业建议或商业决策依据。
          </div>
        </div>

        <div class="contact">
          <div><IconWeixin></IconWeixin> 微信：ggy-xiaozhan</div>
          <div><IconQQ></IconQQ> QQ：2998483320</div>
          <div><IconEmail></IconEmail> 电子邮件：A18581897806@outlook.com</div>
          <div><IconPhone></IconPhone> 联系电话：18581897806</div>
        </div>

      </div>
      <div class="foot">
        <span>
          想看作者更多资源代码、学习内容，欢迎来看我的Github: <a href="https://github.com/ggy-king" target="_blank" >https://github.com/ggy-king</a>
        </span>
        <div>
          我是24岁的“技术小旋风”，大四在读，全栈技能get√，代码界的“社交达人”。
          了解不是万岁，这里才是秘密&nbsp;<el-icon><Right /></el-icon>&nbsp;
          <el-popover
            :width="800"
            popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 0;"
          >
            <template #reference >
              <IconFunny class="secret"></IconFunny>
            </template>
            <template #default>
              <img style="width: 100%;height: 100%;" src="@/assets/images/footer-person.png" alt="个人小介绍">
            </template>
          </el-popover>
          &nbsp;<el-icon><Back /></el-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: 300px;
  margin: 0;
  background-color: #24292e;
  color: #aaa;
   .center {
      width: 1200px;
      margin: 0 auto;
      .head {
        display: flex;
        height: 200px;
        padding-top:40px;
        border-bottom: 1px solid #aaa;
        .statement {
          flex: 5;
          margin-right:40px;
          div:first-child {
            font-size: 22px;
            font-weight: 700;
            color: #fff;
            margin-bottom: 10px;
          }
          div:last-child {
            span {
              color: #398bd4;
            }
          }
        }


        .contact {
          flex: 2;
          div {
            height: 40px;
            color: #fff;
            line-height: 40px;
            
            
          }
        }
      }
      .foot {
          a {
            color: #398bd4;
          }
          div {
            .el-icon {
              font-size: 18px;
              color:#f4ea2a;
              vertical-align: middle;

            }
            .secret {
              border: 1px solid #fff;
              border-radius: 10px;
              vertical-align: middle;
            }
           
        }
      }
    }
}
</style>
