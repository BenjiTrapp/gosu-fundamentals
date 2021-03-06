package example

/**
 * ListNode - Used by Linked List implementations.
 * Created by barelampagos on 12/24/16.
 */
class ListNode<E> {
  var _data: E
  var _next: ListNode<E>

  construct(data: E) {
    _data = data
    _next = null
  }

  // Getters & Setters
  property get Data() : E {
    return _data
  }
  property set Data(data : E) {
    this._data = data
  }
  property get Next() : ListNode<E> { return _next }
  property set Next(next : ListNode<E>) { _next = next }

}