;(() => {
  'use strict'

  const get = (target) => document.querySelector(target)

  const init = () => {
    get('form').addEventListener('submit', (event) => {
      playGame(event)
    })
    setPassword()
  }

  const baseball = {
    limit: 10,
    digit: 4,
    tiral: 0,
    end: false,
    $question: get('.ball_querstion'),
    $answer: get('.ball_answer'),
    $input: get('.ball_input'),
  }

  // 구조 분해 할당으로 각 객체의 값들을 미리 선언해 줄 수 있다.
  // 베이스볼 객체를 각각 키값으로 전역으로 사용할 수 있다.
  const { limit, digit, tiral, $question, $answer, $input } = baseball
  let { trial, end } = baseball

  const setPassword = () => {
    // 패스워드를 지정해줍니다.
    // 리밋수만큼(10개)배열 상자를 만듬 10칸의 방에 false를 채워줌
    const gameLimit = Array(limit).fill(false)
    console.log(gameLimit)
    let password = ''
    while (password.length < digit) {
      const random = parseInt(Math.random * 10, 10)

      if(gameLimit[random]) {
        continue
      }
      password += random
      gameLimit[random] = true
    }
  }

  const onPlayed = (number, hint) => {
    // 시도를 했을 때 number: 내가 입력한 숫자, hint: 현재 어떤 상황?
    return `<em>${trial}차 시도</em>: ${number}, ${hint}`
  }

  const isCorrect = () => {
    // 번호가 같은가
  }

  const isDuplicate = () => {
    // 중복 번호가 있는가
  }

  const getStrikes = () => {
    // 스트라이크 카운트는 몇개
  }

  const getBalls = () => {
    // 볼 카운트는 몇개
  }

  const getResult = () => {
    // 시도에 따른 결과는
  }

  const playGame = (event) => {
    // 게임 플레이
    event.preventDefault()

    if(!!end) {
      return
    }

    const inputNumber = $input.value
    const { password } = baseball

    if (inputNumber.length !== digit) {
      alert(`${digit}자리 숫자를 입력해주세요.`)
    } else if (isDuplicate(inputNumber)) {
      alert('중복 숫자가 있습니다.')
    } else {
      trial++
      const result = onPlayed(inputNumber, getResult(inputNumber, password))
      $question.innerHTML += `<span>${result}</span>`

      if (limit <= trial && !isCorrect(inputNumber, password)) {
        alert('쓰리아웃!')
        end = true
        $answer.innerHTML = password
      }
    }
    $input.value = ''
    $input.focus()

  }

  init();

})()
