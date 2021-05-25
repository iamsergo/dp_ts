import TabsView from "./TabsView";

const tabsView = new TabsView()


console.log(tabsView.getState());

tabsView.tab1.click()
console.log(tabsView.getState());

tabsView.tab2.click()
console.log(tabsView.getState());