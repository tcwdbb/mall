<template>
  <div class="category clearfix">
    <nav-bar class="category-nav-bar">
      <template v-slot:center>
        <div>商品分类</div>
      </template>
    </nav-bar>
    <scroll :pullDownRefresh="false" class="silde scroll">
      <slide-bar
      class="slider-bar"
      :category="category"
      @slideClick="slideClick"
    ></slide-bar>
    </scroll>
    <scroll :pullDownRefresh="false" class="scroll" ref="scroll">
      <sub-category-list
        class="sub-category-list"
        :subCategoryList="subCategoryList"
      ></sub-category-list>
      <tab-control ref="tabControl" :titles="['综合','新品','销量']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="categoryDetailList"></goods-list>
    </scroll>
  </div>
</template>

<script>
import { getCategory, getSubcategory,getCategoryDetail } from "network/category";
import NavBar from "components/common/navbar/NavBar.vue";
import SlideBar from "./childComps/SlideBar.vue";
import SubCategoryList from "./childComps/SubCategoryList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import TabControl from 'components/content/tabcontrol/TabControl.vue';
import GoodsList from 'components/content/goodslist/GoodsList.vue';
import { switchCurTypeMixin } from 'common/mixin'
export default {
  name: "Category",
  mixins: [switchCurTypeMixin],
  data() {
    return {
      //分类侧边栏数据
      category: [],
      //分类内容数据
      subCategoryList: [],
      categoryDetailList: [],
      curIndex: 0,
      currentType: 'pop',
      miniWallkey: null,
    };
  },
  components: {
    NavBar,
    SlideBar,
    SubCategoryList,
    Scroll,
    TabControl,
    GoodsList,
  },
  methods: {
    //监听子组件发送的事件，请求分类内容数据
    slideClick(maitKey, index, miniWallkey) {
      this.miniWallkey = miniWallkey;
      //切换分类时初始化tabControl的选中
      this.$refs.tabControl.currentIndex = 0;
      //点击切换分类后回到顶部
      this.$refs.scroll.backTop(0,0,0);
      //防止点击当前选中的分类重复请求数据
      if (this.curIndex === index) return;
      this.curIndex = index;
      //点击分类时请求当前分类的内容
      this.getSubcategory(maitKey);
    },
    //请求侧边栏分类数据
    getCategory() {
      getCategory().then((res) => {
        this.category = res.data.category.list;
        //初始时当category数据
        // this.$nextTick(() => {
          this.getSubcategory(this.category[0].maitKey);
          this.miniWallkey = this.category[0].miniWallkey;
        // });
      });
    },
    //请求分类内容数据
    getSubcategory(maitKey) {
      getSubcategory(maitKey).then((res) => {
        this.subCategoryList = res.data.list;
        this.getCategoryDetail(this.miniWallkey, this.currentType);
      });
    },
    getCategoryDetail(miniWallkey, type) {
      getCategoryDetail(miniWallkey, type).then(res => {
        this.categoryDetailList = res;
      })
    },
    //点击切换（综合，新品，销量）的数据
    tabClick(index) {
      this.switchCurType(index);
      //重新请求新的类型数据
      this.getCategoryDetail(this.miniWallkey, this.currentType);
    }
  },
  created() {
    this.getCategory();
    
  }
};
</script>

<style scoped>
.category {
  height: 100vh;
}

.scroll {
  position: fixed;
  left: 100px;
  top: 44px;
  bottom: 50px;
  overflow: hidden;
}

.silde.scroll {
  left: 0;
}

.category-nav-bar {
  color: #fff;
  background-color: var(--color-tint);
}



</style>