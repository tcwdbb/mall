<template>
  <div v-if="Object.keys(commentInfo).length != 0" class="detail-comment-info">
    <div class="comment-title">
      <div class="comment">用户评价</div>
      <div class="comment more">更多</div>
    </div>
    <div class="user-info">
      <img class="user-avatar" :src="commentInfo.user.avatar" alt="">
      <span class="user-name">{{commentInfo.user.uname}}</span>
    </div>
    <p class="user-comment">{{commentInfo.content}}</p>
    <div class="goods-style">
      <span>{{commentInfo.created | createdFilter}}</span>
      <span>{{commentInfo.style}}</span>
    </div>
    <div class="comment-img">
      <img class="comment-img-item" v-for="(item, index) in commentInfo.images" :src="item" alt="" :key="index">
    </div>
    <p class="explain">{{commentInfo.explain}}</p>
  </div>
</template>

<script>
import {dateFormat} from 'common/utils'

export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    //格式化日期
    createdFilter(val) {
      const date = new Date(val*1000);
      console.log(date)
      return dateFormat("YYYY-mm-dd HH:MM", date);
    }
  }
}
</script>

<style scoped>
  .detail-comment-info {
    padding: 0 6px;
  }

  .comment-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 26px 0;
    border-top: 3px solid rgba(0, 0, 0, .05);
    border-bottom: 1px solid rgba(0, 0, 0, .05);
  }

  .comment-title .comment {
    flex: 1;
  }

  .comment-title .comment.more {
    text-align: right;
  }

  .user-info .user-avatar {
    width: 45px;
    border-radius: 50%;
    vertical-align: middle;
    margin: 10px;
  }

  .user-comment {
    font-size: 13px;
  }

  .goods-style {
    padding: 10px 0;
    font-size: 12px;
    color: rgb(153, 153, 153);
  }

  .goods-style span {
    margin-right: 5px;
  }

  .comment-img .comment-img-item {
    width: 32%;
    margin-right: 1%;
  }

  .comment-img .comment-img-item:nth-child(3n) {
    margin-right: 0;
  }

  .info {
    width: 100%;
    text-align: center;
  }

  .explain {
    font-size: 12px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
</style>