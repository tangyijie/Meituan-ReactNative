# Meituan-ReactNative

##备忘:

###Page的Component提供一个封装的方法customNavigationBar(page)自定义该页面的顶部导航
###传入参数page相当于this

###弹出模态窗口提供了一个封装的方法showModal(View, Animated):
###具体用法:
<pre>
    <code>
        //Animated可以不填,默认为slide
        import * as userActions from '../actions/user';
        this.props.dispatch(userActions.showModal(this.selectCity,"slide"))
        //这是你模态里面的内容,page也是相当于this,这个模态是不提供顶部导航的,需要顶部导航的内容,请自行完成
        selectCity(page){
                return(
                    <Text>2222</Text>
                )
        }
    </code>
</pre>