import React, { Component } from 'react';
import { SearchBar, Toast } from 'antd-mobile';

import api from '../../api/api';
import store from '../../store/store';
import Header from '../Header';
import SearchTabwrap from './SearchTabwrap'
import SearchSuggest from './SearchSuggest'
const translater = {
  songs: 1,
  albums: 10,
  artists: 100,
  playlists: 1000,
}

class Mod extends Component {
  state = {
    keywords: '',
    searchedKeywords: '',
    showSug: false,
    showList: false,
    type: 'songs',
    loadedTab: {},
    refreshing: false
  }
  render() {
    let { keywords, showSug, showList, refreshing } = this.state;
    return (
      <div className='page search' style={{ display: 'flex', flexDirection: 'column' }} onTouchStart={this.onTouchStart}>
        <Header title='搜索' key='header'
          leftBtn={(<i className='iconfont icon-back' key='lb' onClick={this.back}></i>)}
        />
        <SearchBar placeholder='请输入关键词' ref='keywords'
          onChange={this.getSuggest}
          onSubmit={this.submitKeywords}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={keywords}
          style={{ flex: 'none' }}
        />
        <SearchSuggest keywords={keywords} showSug={showSug} submitKeywords={this.submitKeywords} />
        <SearchTabwrap showList={showList} tabChange={this.tabChange} refreshing={refreshing} addData={this.addData} />
      </div>
    );
  }
  componentDidMount() {
    this.refs.keywords.focus()
  }
  back = () => {
    this.props.history.go(-1)
  }
  onTouchStart = (e) => {
    if (e.target.className !== 'am-search-value') {
      document.querySelector('.am-search-value').blur();
      this.setState({ showSug: false })
    }
  }
  onFocus = () => {
    let { keywords, showSug } = this.state
    if (keywords !== '' && !showSug) {
      this.setState({ showSug: true })
    }
  }

  getSuggest = val => {
    this.setState({ showSug: true, keywords: val }, () => {
      if (val !== '') {
        api.searchSuggest({
          data: {
            keywords: val
          },
          success: ({ result }) => {
            let sugArr = [];
            let { order } = result;
            order.forEach(type => {
              result[type].forEach(ele => {
                if (type !== 'mvs') {
                  let item = {
                    name: ele.name,
                    id: ele.id,
                    type: type
                  }
                  sugArr.push(item)
                }
              });
            });
            store.dispatch({
              type: "SET_SEARCH_SUGGEST",
              data: sugArr
            })
          }
        })
      } else {
        this.setState({ suggest: [], showSug: false })
      }
    })
  }
  submitKeywords = () => {
    let { keywords, type } = this.state;
    if (keywords !== '') {
      this.setState({ searchedKeywords: keywords, loadedTab: {} }, () => {
        this.getResult(type)
      })
    } else {
      Toast.info('搜索内容不能为空', 1, () => { this.refs.keywords.focus() }, false);
    }
  }
  getResult = () => {
    let { searchedKeywords, type, loadedTab } = this.state;
    if (!loadedTab[type]) {
      this.setState({ showSug: false, showList: true })
      Toast.loading('加载中', 10, null, false)
      api.search({
        data: { keywords: searchedKeywords, type: translater[type] },
        success: json => {
          console.log(json)
          store.dispatch({
            type: "SET_SEARCH_" + type.toUpperCase(),
            data: json.result[type]
          })
          loadedTab[type] = 31;
          this.setState({ loadedTab })
          Toast.hide()
        }
      })
    }
  }
  addData = () => {
    let { searchedKeywords, type, loadedTab } = this.state;
    this.setState({ refreshing: true })
    api.search({
      data: { keywords: searchedKeywords, type: translater[type], offset: loadedTab[type] },
      success: json => {
        if (json.result[type]) {
          store.dispatch({
            type: "ADD_SEARCH_" + type.toUpperCase(),
            data: json.result[type]
          })
          loadedTab[type] += 30;
          this.setState({ loadedTab, refreshing: false })
        } else {
          Toast.info('已经到底了', 1, () => { this.setState({ refreshing: false }) }, false)
        }
      }
    })
  }
  tabChange = tab => {
    this.setState({ type: tab.type }, () => { this.getResult() })
  }
}

export default Mod;