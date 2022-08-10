<script>
// import AppRouter from "yn-p1/libs/modules/navi/router";
import { mapGetters, mapActions } from "vuex";
import "yn-p1/libs/components/yn-menu/";
import "yn-p1/libs/components/yn-menu-item/";
import "yn-p1/libs/components/yn-sub-menu/";
import "yn-p1/libs/components/yn-icon/";

export default {
  name: "NaviBar",
  props: {
    title: String
  },
  data: function() {
    return {
      collapsed: false
    };
  },
  computed: {
    ...mapGetters("themeState", ["currentTheme"]),
    ...mapGetters("routerState", ["menuItems"])
  },
  methods: {
    ...mapActions("routerState", ["changeTitle"]),
    onItemClick(click) {
      const router = this.$router;
      let keyPath = click.keyPath,
        path = "";

      for (let keyPathIndex in keyPath) {
        path = "/" + keyPath[keyPathIndex] + path;
      }

      if (router.currentRoute.path !== path || this.$route.query) {
        router.push({ path: path, query: this.$route.query });
      }
    }
  },
  watch: {
    $route(to) {
      this.changeTitle(to.meta.label);
    }
  },
  render: function(h) {
    const routerItem = this.menuItems;
    let items = [];

    const buildItemEle = (item, children) => {
      if (item.meta.routerOnly) return null;
      if (Array.isArray(children) && children.length > 0) {
        if (item.meta.icon) {
          return (
            <yn-sub-menu key={item.meta.appId}>
              <span slot="title">
                <yn-icon type={item.meta.icon} />
                {item.meta.label}
              </span>
              {children}
            </yn-sub-menu>
          );
        } else {
          return (
            <yn-sub-menu key={item.meta.appId}>
              <span slot="title">{item.meta.label}</span>
              {children}
            </yn-sub-menu>
          );
        }
      } else {
        if (item.meta.icon) {
          return (
            <yn-menu-item key={item.meta.appId}>
              <yn-icon type={item.meta.icon} />
              <span>{item.meta.label}</span>
            </yn-menu-item>
          );
        } else {
          return (
            <yn-menu-item key={item.meta.appId}>
              <span>{item.meta.label}</span>
            </yn-menu-item>
          );
        }
      }
    };

    const buildItemEleList = items => {
      let item,
        tempItemEle,
        tempList = [],
        tempChildrenList;

      if (Array.isArray(items) && items.length > 0) {
        for (let itemIndex in items) {
          item = items[itemIndex];
          if (!item.children) {
            tempItemEle = buildItemEle(item);
          } else {
            tempChildrenList = buildItemEleList(item.children);
            tempItemEle = buildItemEle(item, tempChildrenList);
          }
          tempItemEle && tempList.push(tempItemEle);
        }
      }

      return tempList;
    };

    items = buildItemEleList(routerItem);

    return (
      <yn-menu
        mode="inline"
        theme={this.currentTheme}
        inlineCollapsed={this.collapsed}
        onclick={this.onItemClick}
      >
        {items}
      </yn-menu>
    );
  }
};
</script>
