/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import From from '.'
export default class FromTest extends Component {
    render() {
        return (
            <div>
                <From onSubmit={(datas) => {
                    console.log(datas);
                }}
                    defaultValue={{
                        account: 4655822
                    }}
                >
                    <div>
                        账号 <From.input name="account" type="text"></From.input>
                    </div>
                    <div>
                        密码 <From.input name="password" type="password"></From.input>
                    </div>
                    <From.button>提交</From.button>
                </From>

                <From onSubmit={(datas) => {
                    console.log(datas);
                }}
                    defaultValue={{
                        account: 4655822
                    }}
                >
                    <div>
                        账号 <From.input name="account" type="text"></From.input>
                    </div>
                    <div>
                        密码 <From.input name="password" type="password"></From.input>
                    </div>
                    <From.button>提交</From.button>
                </From>
            </div>
        )
    }
}
