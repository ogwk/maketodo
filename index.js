'use strict';
//{name: タスクの文字列、state: 完了しているかどうかの真偽値}
const tasks = [];

/**
 * TODOを追加する
 * ＠param｛string} task
 */
function add(task){
    tasks.push({name: task, state: false});
}

/**
 * タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了したかを開けす
 * ＠param{object} taskAndIsDonePair
 * @return{boolean} 完了したかどうか
 */
function isDone(taskAndIsDonePair){
    return taskAndIsDonePair.state;
}
/**
 * タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了しているか
 * @param {object} taskAndIsDonePair
 * @return{boolean} 完了していないかどうか
 * 
 */
function isNotDone(taskAndIsDonePair){
    return !isDone(taskAndIsDonePair);
}

/**
 * TODOの一覧の配列を取得する
 * @return {array}
 */

 function list(){
     return tasks
        .fileter(task => !isDone(task))
        .map(t => t.name);
 }



module.exports = {add, list};

