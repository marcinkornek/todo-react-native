import Realm from 'realm'
import uuidv1 from 'uuid/v1'

class TodosRealm {
  constructor() {
    this.items = []
    this.realm = undefined
    this.isInitialized = false
  }

  TodoSchema = {
    name: 'Todo',
    primaryKey: 'key',
    properties: {
      key: 'string',
      title: 'string',
      completed: 'bool',
      createdAt: 'date'
    }
  }

  initializeRealm = async () => {
    const realm = await Realm.open({
      schema: [this.TodoSchema],
      deleteRealmIfMigrationNeeded: true // delete the Realm if migration is needed
    })

    this.realm = realm
    this.items = realm.objects('Todo').map((x) => { return Object.assign({}, x) })
    this.isInitialized = true
    return this.items
  }

  setItems = () => {
    this.items = this.realm.objects('Todo').map((x) => { return Object.assign({}, x) })
  }

  toggleTodo = (key) => {
    const todo = this.items.find((item) => { return item.key === key })

    if (todo) {
      const updatedTodo = {
        ...todo,
        completed: !todo.completed
      }

      try {
        this.realm.write(() => {
          this.realm.create('Todo', updatedTodo, true)
          this.setItems()
        })
      } catch (e) {
        console.log('Error on updating')
      }
    }

    return this.items
  }

  deleteTodo = (key) => {
    const todo = this.realm.objectForPrimaryKey('Todo', key)

    if (todo) {
      try {
        this.realm.write(() => {
          this.realm.delete(todo)
          this.setItems()
        })
      } catch (e) {
        console.log('Error on deleting')
      }
    }

    return this.items
  }

  addTodo = (title) => {
    const todo = {
      key: uuidv1(),
      title,
      completed: false,
      createdAt: new Date()
    }

    try {
      this.realm.write(() => {
        this.realm.create('Todo', todo)
        this.setItems()
      })
    } catch (e) {
      console.log('Error on creating')
    }

    return this.items
  }
}

export default new TodosRealm()
