<template>
  <div class="review">
    <div class="review__content">
      <p class="review__author">{{review.author}}</p>
      <p class="review__date">{{review.date}}</p>
      <p class="review__text">{{review.comment}}</p>
    </div>
    <div class="review__note">
      <span class="review__digit">{{review.note}}</span>/5
    </div>
  </div>
</template>

<script>
export default {
  name: 'Review',
  props: ['review'],
}
</script>
<style scoped>
  .review {
    padding:16px 0px;
    text-align: left;
    display:flex;
    align-items: center;
    border-bottom:solid 1px #333;
  }

  .review__content {
    flex-grow:1
  }

  .review__author {
    font-weight: bold;
    font-size:13px;
  }

  .review__date {
    font-weight: 300;
    font-size:14px;
    margin-top:-4px;
  }

  .review__text {
    font-size:15px;
  }

  .review__note {
    color:#ececec;
  }
  .review__digit {
    color:white;
    font-weight: bold;
    font-size:32px;
  }
</style>
