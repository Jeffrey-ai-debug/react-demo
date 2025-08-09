import React, { useState } from 'react'
import Meals from './components/Meals/Meals'
import A from './components/A/A'
import B from './components/B/B'
import TestContext from '././store/testContext'

export default function App() {
  // 模拟数据
  const MEALS_DATA = [
    {
      id: '1',
      title: '汉堡包',
      desc: '一觉醒来五点半 一觉醒来五点半 一觉醒来五点半 一觉醒来五点半 一觉醒来五点半 一觉醒来五点半',
      price: 12,
      img: '/img/meals/1.png',
    },
    {
      id: '2',
      title: '双层吉士汉堡',
      desc: '睁眼闭眼得吃饭 睁眼闭眼得吃饭 睁眼闭眼得吃饭 睁眼闭眼得吃饭 睁眼闭眼得吃饭 睁眼闭眼得吃饭',
      price: 20,
      img: '/img/meals/2.png',
    },
    {
      id: '3',
      title: '巨无霸',
      desc: '加点柠檬整点蒜 加点柠檬整点蒜 加点柠檬整点蒜 加点柠檬整点蒜 加点柠檬整点蒜 加点柠檬整点蒜',
      price: 24,
      img: '/img/meals/3.png',
    },
    {
      id: '4',
      title: '麦辣鸡腿汉堡',
      desc: '你看这生活中不中 你看这生活中不中 你看这生活中不中 你看这生活中不中 你看这生活中不中 你看这生活中不中',
      price: 21,
      img: '/img/meals/4.png',
    },
    {
      id: '5',
      title: '板烧鸡腿汉堡',
      desc: '大白豆腐韭菜花 大白豆腐韭菜花 大白豆腐韭菜花 大白豆腐韭菜花 大白豆腐韭菜花 大白豆腐韭菜花',
      price: 12,
      img: '/img/meals/5.png',
    },
    {
      id: '6',
      title: '麦香鸡腿堡',
      desc: '腐乳六舅拌香蕉 腐乳六舅拌香蕉 腐乳六舅拌香蕉 腐乳六舅拌香蕉 腐乳六舅拌香蕉 腐乳六舅拌香蕉',
      price: 22,
      img: '/img/meals/6.png',
    },
    {
      id: '7',
      title: '吉士汉堡',
      desc: '今天早餐就吃它 今天早餐就吃它 今天早餐就吃它 今天早餐就吃它 今天早餐就吃它 今天早餐就吃它',
      price: 12,
      img: '/img/meals/7.png',
    },
  ]
  /* 
  创建state存储购物车数据
    1.商品 [] items
    2.商品总数 (totalAmount)
    3.商品总价 (totalPrice)
*/
  const [carData, setCarData] = useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  })

  // 向购物车加商品
  const addMealHandler = (meal) => {
    // 对购物车浅复制
    const newCart = { ...carData }
    // 判断购物车中是否存在商品
    if (newCart.items.indexOf(meal) == -1) {
      newCart.items.push(meal)
      meal.amount = 1
    } else {
      // 增加商品数量
      meal.amount += 1
    }
    // 增加总数
    newCart.totalAmount += 1
    // 增加总金额
    newCart.totalPrice += meal.price
    // 设置数据
    setCarData(newCart)
  }

  // 减少商品数量
  const reduceHandler = (meal) => {
    // 对购物车浅复制
    const newCart = { ...carData }
    // 减少商品的数量
    meal.amount -= 1
    // 检查商品数量是否归零
    if (meal.amount === 0) {
      let index = newCart.items.findIndex((e) => e.id === meal.id)
      if (index !== -1) {
        newCart.items.splice(index, 1)
      }
    }
    // 减少总数
    newCart.totalAmount -= 1
    // 减少总金额
    newCart.totalPrice -= meal.price
    // 设置数据
    setCarData(newCart)
  }
  // 创建state存储食物列表
  const [mealsData, setMealsData] = useState(MEALS_DATA)

  return (
    <>
      <A />
      <TestContext.Provider value={{ name: 'walter', age: 66 }}>
        <B />
        <Meals meals={mealsData} />
      </TestContext.Provider>
    </>
  )
}
