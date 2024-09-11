import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.htao.android',
  name: '淘宝Lite',
  groups: [
    {
      key: 1,
      name: '局部广告-关闭顶部[打开淘宝]横幅',
      fastQuery: true,
      activityIds: 'com.taobao.htao.android.detail.DetailActivity',
      rules: [
        {
          matches:
            'WebView[text$="天猫Tmall.com"] >2 View[id=null][childCount=1] > @TextView[visibleToUser=true][text=""] <<n [vid="detail_swipe_to_refresher"]',
          exampleUrls: 'https://e.gkd.li/661fca21-45e3-4e89-8ccc-b8bafb1bab02',
          snapshotUrls: 'https://i.gkd.li/i/16842507',
        },
      ],
    },
  ],
});