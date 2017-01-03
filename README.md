# Meituan-ReactNative

##备忘:

###一、Page的Component提供一个封装的方法customNavigationBar(page)自定义该页面的顶部导航
###传入参数page相当于this，示例：
<pre>
    <code>
        render() {...}
        //该页面自定义的顶部导航
        customNavigationBar(page) {
            return(你的顶部导航内容)
        }
    </code>
</pre>

###二、弹出模态窗口提供了一个封装的方法showModal(View, Animated):
###示例:
<pre>
    <code>
        //Animated可以不填,默认为slide
        import * as userActions from '../actions/user';
        this.props.dispatch(userActions.showModal(this.mModal,"slide"))
        //这是你模态里面的内容,page也是相当于this,这个模态是不提供顶部导航的,需要顶部导航的内容,请自行完成
        mModal(page){
                return(
                    你的Modal内容
                )
        }
    </code>
</pre>
