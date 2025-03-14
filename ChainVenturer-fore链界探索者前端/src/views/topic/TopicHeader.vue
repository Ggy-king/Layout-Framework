<!-- 专题头部 -->

<script setup lang="ts">
import { ref } from 'vue';
import type { TagProps } from 'element-plus'
 
type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([
  { type: 'primary', label: '1 · 去中心' },
  { type: 'success', label: '2 · 分布式' },
  { type: 'info', label: '3 · 挖矿机' },
  { type: 'warning', label: '4 · 钱包地' },
  { type: 'danger', label: '5 · 比特币' },
  { type: 'primary', label: '6 · 加密货币' },
  { type: 'success', label: '7 · 共识机' },
  { type: 'info', label: '8 · 交易所' },
  { type: 'warning', label: '9 · 币圈热潮' },
  { type: 'danger', label: '10 · 数字金' },
  { type: 'primary', label: '11 · 分布式记账' },
  { type: 'success', label: '12 · 智能约' },
  { type: 'info', label: '13 · 币值风波' },
  { type: 'warning', label: '14 · 公钥密' },
  { type: 'danger', label: '15 · 私钥安全' },
  { type: 'primary', label: '16 · 泡沫论' },
  { type: 'success', label: '17 · 投机潮' },

])


</script>

<template>
    <div class="header">
        <div class="introduce">
            <div class="head">与专题有约</div>
            <div class="subtitle">链界探索者为您精心搜罗数字货币领域的最新动态，以及各种最新
                活动 - 等币圈热门话题，让您始终站在资讯前沿。</div>
        </div>
        <div class="keyword">

                <el-tag
                v-for="item in items"
                :key="item.label"
                :type="item.type"
                size="large"
                round
                >
                {{ item.label }}
                </el-tag>

        </div>
    </div>
</template>

<style scoped lang="scss">
    .header {
        width: 100%;
        height: 260px;
        margin-bottom: 14px;
        .introduce {
            height: 180px;
            background: linear-gradient(to bottom, #ffe4e1, #ffffff); /* 浅粉色到白色 */
            padding-left: 30px;
            border-radius: 20px;

            .head {
                padding-top: 30px;
                font-size: 28px;
                font-weight: 600;
                color: #409eff;
                color: linear-gradient(to bottom, #ffe4e1, #ffffff);;
            }
            .subtitle {
                font-size: 16px;
                color: #6f7a84;
                padding-top: 8px;
            }
        }
        .keyword {
            margin-top: 10px;
            height: 80px;

            .el-tag {
                font-size: 14px;
                margin: 2px 20px;
            }
        }
    }
</style>
