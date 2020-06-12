# Autocomplete

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Show result

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## `app-auto-complete` 的使用方法
### 输入参数
#### [searchResult]: string[]
传入自动补齐候选值

### 输出参数
#### (handleSearch): (value: string)=> {} 
当`handleSearch`被调用时，触发查询操作(本例mock代替)后将自动匹配的候选值放入`searchResult`

`value`是输入框当前值

#### (valueChange): (value: string)=> {}
当`valueChange`被调用时，更新组件中的input值给外部组件
