

class ArrayQueue {
  constructor(capacity) {
    this.data = [];
    this.capacity = capacity; // số lượng phần tử tối đa
    this.size = 0; // số lượng phần tử hiện tại trong queue
  }
  /**
   * Kiểm tra queue có đầy ko
   */
  isFull() {
    return this.size === this.capacity;
  }
  /**
   * Kiểm tra queue có rỗng không
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * Thêm item vào cuối queue nếu queue chưa đầy
   * @param {*} item 
   */
  enqueue(item) {
    if (this.isFull()) return false;
    this.data.push(item);
    this.size++;
    return true;
  }

  /**
   * Lấy ra phần tử đầu tiên của queue
   */
  dequeue() {
    if (this.isEmpty()) return undefined;
    this.size--;
    return this.data.shift();
  }

  /**
   * Xem phần tử đầu tiên của queue
   */
  front() {
    if (this.isEmpty()) return undefined;

    return this.data[0];
  }
  /**
   * Xem phần tử cuối của queue
   */
  rear() {
    if (this.isEmpty()) return undefined;
    return this.data[this.size - 1];
  }
  /**
   * Làm rỗng queue
   */
  clear() {
    this.data.length = 0;
    this.size = 0
  }


}

const BFSPure = () => {
  // Create a Queue and add our initial node in it
  let q = new Queue(this.nodes.length);
  let explored = new Set();
  q.enqueue(node);

  // Mark the first node as explored explored.
  add(node);

  // We'll continue till our queue gets empty
  while (!q.isEmpty()) {
    let t = q.dequeue();

    // Log every element that comes out of the Queue
    console.log(t);

    // 1. In the edges object, we search for nodes this node is directly connected to.
    // 2. We filter out the nodes that have already been explored.
    // 3. Then we mark each unexplored node as explored and add it to the queue.
    this.edges[t]
      .filter(n => !explored.has(n))
      .forEach(n => {
        explored.add(n);
        q.enqueue(n);
      });
  }
}

const nodes = [
  {
    "id": 5146952,
    "name": "CBG-MP-01-02",
    "ip": "118.70.0.235",
    "tier": 3,
    "deviceType": "ROUTER"
  },
  {
    "id": 5146966,
    "name": "CBG-MP-01-01",
    "ip": "118.70.0.234",
    "tier": 3,
    "deviceType": "ROUTER"
  },
  {
    "id": 5141437,
    "name": "CBGP00302GC57",
    "ip": "10.80.0.204",
    "tier": 2,
    "deviceType": "GPON"
  },
  {
    "id": 5141519,
    "name": "CE201M01CBGP00401HW67",
    "ip": "10.80.0.65",
    "tier": 2,
    "deviceType": "SWITCH"
  },
  {
    "id": 5141665,
    "name": "DI201M01CBGM00101HW24",
    "ip": "10.80.0.1",
    "tier": 2,
    "deviceType": "SWITCH"
  },
  {
    "id": 5142126,
    "name": "CE201M01LSNV00101HW24",
    "ip": "10.115.11.65",
    "tier": 2,
    "deviceType": "SWITCH"
  },
  {
    "id": 5142448,
    "name": "CBGP00502GC16",
    "ip": "10.80.1.12",
    "tier": 2,
    "deviceType": "GPON"
  },
  {
    "id": 5142529,
    "name": "CBGP10001HW57",
    "ip": "10.80.5.149",
    "tier": 2,
    "deviceType": "SWITCH"
  },
  {
    "id": 5142735,
    "name": "CBGP00701GC16",
    "ip": "10.80.1.75",
    "tier": 2,
    "deviceType": "GPON"
  },
  {
    "id": 5143025,
    "name": "CBGP00501GC57",
    "ip": "10.80.1.11",
    "tier": 2,
    "deviceType": "GPON"
  },
  {
    "id": 5143106,
    "name": "CE201M01CBGP00701HW67",
    "ip": "10.80.1.65",
    "tier": 2,
    "deviceType": "SWITCH"
  },
  {
    "id": 5143310,
    "name": "CBGP00102GC08",
    "ip": "10.80.0.140",
    "tier": 2,
    "deviceType": "GPON"
  },
  {
    "id": 5143391,
    "name": "CE201M01CBGP00101HW24",
    "ip": "10.80.0.129",
    "tier": 2,
    "deviceType": "SWITCH"
  },
  {
    "id": 5143734,
    "name": "CBGP00601GC08",
    "ip": "10.80.1.139",
    "tier": 2,
    "deviceType": "GPON"
  },
  {
    "id": 5143815,
    "name": "CE201M01CBGP10001HW67",
    "ip": "10.80.5.129",
    "tier": 2,
    "deviceType": "SWITCH"
  },
  {
    "id": 5144022,
    "name": "CBGP00401GC57",
    "ip": "10.80.0.75",
    "tier": 2,
    "deviceType": "GPON"
  },
  {
    "id": 5144102,
    "name": "CE201M01CBGP00501HW24",
    "ip": "10.80.1.1",
    "tier": 2,
    "deviceType": "SWITCH"
  },
  {
    "id": 5144310,
    "name": "CBGP00402GC08",
    "ip": "10.80.0.76",
    "tier": 2,
    "deviceType": "GPON"
  },
  {
    "id": 5144392,
    "name": "CE201M01CBGP00601HW58",
    "ip": "10.80.1.129",
    "tier": 2,
    "deviceType": "SWITCH"
  },
  {
    "id": 5144599,
    "name": "CBGP00202GC08",
    "ip": "10.80.2.76",
    "tier": 2,
    "deviceType": "GPON"
  },
  {
    "id": 5144679,
    "name": "CE201M01CBGP00301HW67",
    "ip": "10.80.0.193",
    "tier": 2,
    "deviceType": "SWITCH"
  },
  {
    "id": 5144739,
    "name": "CBGP00101GC57",
    "ip": "10.80.0.139",
    "tier": 2,
    "deviceType": "GPON"
  },
  {
    "id": 5144820,
    "name": "CBGM00102HW57",
    "ip": "10.80.0.22",
    "tier": 2,
    "deviceType": "SWITCH"
  },
  {
    "id": 5145026,
    "name": "CBGP00201GC57",
    "ip": "10.80.2.75",
    "tier": 2,
    "deviceType": "GPON"
  },
  {
    "id": 5145104,
    "name": "CE201M01CBGP00201HW24",
    "ip": "10.80.2.65",
    "tier": 2,
    "deviceType": "SWITCH"
  },
  {
    "id": 5145166,
    "name": "CBGP00301GC57",
    "ip": "10.80.0.203",
    "tier": 2,
    "deviceType": "GPON"
  },
  {
    "id": 5145249,
    "name": "CBGP00302HW57",
    "ip": "10.80.0.213",
    "tier": 2,
    "deviceType": "SWITCH"
  }
];
const links = [
  {
    "id": 0,
    "source": 5146966,
    "sourceName": "CBG-MP-01-01",
    "sourceIp": "118.70.0.234",
    "sourceTier": 3,
    "target": 5146952,
    "targetName": "CBG-MP-01-02",
    "targetIp": "118.70.0.235",
    "targetTier": 3,
    "listSubPort": [
      {
        "sourcePort": "ge-1/0/0",
        "targetPort": "ge-1/0/0"
      },
      {
        "sourcePort": "ge-1/0/1",
        "targetPort": "ge-1/0/1"
      },
      {
        "sourcePort": "ge-1/0/2",
        "targetPort": "ge-1/0/2"
      },
      {
        "sourcePort": "ge-1/0/6",
        "targetPort": "ge-1/0/6"
      },
      {
        "sourcePort": "ge-1/0/5",
        "targetPort": "ge-1/0/5"
      },
      {
        "sourcePort": "ge-1/0/4",
        "targetPort": "ge-1/0/4"
      },
      {
        "sourcePort": "ge-1/0/3",
        "targetPort": "ge-1/0/3"
      },
      {
        "sourcePort": "ge-1/1/2",
        "targetPort": "ge-1/1/2"
      },
      {
        "sourcePort": "ge-1/1/1",
        "targetPort": "ge-1/1/1"
      },
      {
        "sourcePort": "ge-1/1/0",
        "targetPort": "ge-1/1/0"
      },
      {
        "sourcePort": "ge-1/0/7",
        "targetPort": "ge-1/0/7"
      },
      {
        "sourcePort": "ge-1/1/6",
        "targetPort": "ge-1/1/6"
      },
      {
        "sourcePort": "ge-1/1/5",
        "targetPort": "ge-1/1/5"
      },
      {
        "sourcePort": "ge-1/1/4",
        "targetPort": "ge-1/1/4"
      },
      {
        "sourcePort": "ge-1/1/3",
        "targetPort": "ge-1/1/3"
      },
      {
        "sourcePort": "ge-1/1/7",
        "targetPort": "ge-1/1/7"
      }
    ]
  },
  {
    "id": 27,
    "source": 5144310,
    "sourceName": "CBGP00402GC08",
    "sourceIp": "10.80.0.76",
    "sourceTier": 2,
    "target": 5141519,
    "targetName": "CE201M01CBGP00401HW67",
    "targetIp": "10.80.0.65",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "e1/1",
        "targetPort": "XGigabitEthernet0/0/3"
      },
      {
        "sourcePort": "e1/1",
        "targetPort": "XGigabitEthernet0/0/4"
      }
    ],
    "break": false
  },
  {
    "id": 29,
    "source": 5144022,
    "sourceName": "CBGP00401GC57",
    "sourceIp": "10.80.0.75",
    "sourceTier": 2,
    "target": 5141519,
    "targetName": "CE201M01CBGP00401HW67",
    "targetIp": "10.80.0.65",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "e0/1",
        "targetPort": "XGigabitEthernet0/0/2"
      },
      {
        "sourcePort": "e0/1",
        "targetPort": "XGigabitEthernet0/0/1"
      }
    ],
    "break": false
  },
  {
    "id": 31,
    "source": 5146966,
    "sourceName": "CBG-MP-01-01",
    "sourceIp": "118.70.0.234",
    "sourceTier": 3,
    "target": 5141665,
    "targetName": "DI201M01CBGM00101HW24",
    "targetIp": "10.80.0.1",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "xe-2/0/0",
        "targetPort": "XGigabitEthernet1/0/22"
      },
      {
        "sourcePort": "xe-2/0/1",
        "targetPort": "XGigabitEthernet2/0/22"
      }
    ]
  },
  {
    "id": 33,
    "source": 5146952,
    "sourceName": "CBG-MP-01-02",
    "sourceIp": "118.70.0.235",
    "sourceTier": 3,
    "target": 5141665,
    "targetName": "DI201M01CBGM00101HW24",
    "targetIp": "10.80.0.1",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "xe-2/0/1",
        "targetPort": "XGigabitEthernet2/0/24"
      },
      {
        "sourcePort": "xe-2/0/0",
        "targetPort": "XGigabitEthernet1/0/24"
      }
    ]
  },
  {
    "id": 35,
    "source": 5141519,
    "sourceName": "CE201M01CBGP00401HW67",
    "sourceIp": "10.80.0.65",
    "sourceTier": 2,
    "target": 5141665,
    "targetName": "DI201M01CBGM00101HW24",
    "targetIp": "10.80.0.1",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "XGE0/0/24",
        "targetPort": "XGE2/0/1"
      },
      {
        "sourcePort": "XGE0/0/23",
        "targetPort": "XGE1/0/1"
      }
    ],
    "break": false
  },
  {
    "id": 65,
    "source": 5141665,
    "sourceName": "DI201M01CBGM00101HW24",
    "sourceIp": "10.80.0.1",
    "sourceTier": 2,
    "target": 5143106,
    "targetName": "CE201M01CBGP00701HW67",
    "targetIp": "10.80.1.65",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "XGE1/0/5",
        "targetPort": "XGE0/0/23"
      },
      {
        "sourcePort": "XGE2/0/5",
        "targetPort": "XGE0/0/24"
      }
    ],
    "break": false
  },
  {
    "id": 67,
    "source": 5142735,
    "sourceName": "CBGP00701GC16",
    "sourceIp": "10.80.1.75",
    "sourceTier": 2,
    "target": 5143106,
    "targetName": "CE201M01CBGP00701HW67",
    "targetIp": "10.80.1.65",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "e1/1",
        "targetPort": "XGigabitEthernet0/0/1"
      },
      {
        "sourcePort": "e1/1",
        "targetPort": "XGigabitEthernet0/0/2"
      }
    ],
    "break": false
  },
  {
    "id": 70,
    "source": 5141665,
    "sourceName": "DI201M01CBGM00101HW24",
    "sourceIp": "10.80.0.1",
    "sourceTier": 2,
    "target": 5143391,
    "targetName": "CE201M01CBGP00101HW24",
    "targetIp": "10.80.0.129",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "XGE1/0/2",
        "targetPort": "XGE0/0/23"
      },
      {
        "sourcePort": "XGE2/0/2",
        "targetPort": "XGE0/0/24"
      }
    ],
    "break": false
  },
  {
    "id": 72,
    "source": 5144739,
    "sourceName": "CBGP00101GC57",
    "sourceIp": "10.80.0.139",
    "sourceTier": 2,
    "target": 5143391,
    "targetName": "CE201M01CBGP00101HW24",
    "targetIp": "10.80.0.129",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "e1/2",
        "targetPort": "XGigabitEthernet0/0/2"
      },
      {
        "sourcePort": "e1/1",
        "targetPort": "XGigabitEthernet0/0/1"
      }
    ],
    "break": false
  },
  {
    "id": 74,
    "source": 5143310,
    "sourceName": "CBGP00102GC08",
    "sourceIp": "10.80.0.140",
    "sourceTier": 2,
    "target": 5143391,
    "targetName": "CE201M01CBGP00101HW24",
    "targetIp": "10.80.0.129",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "e1/1",
        "targetPort": "XGigabitEthernet0/0/4"
      },
      {
        "sourcePort": "e1/1",
        "targetPort": "XGigabitEthernet0/0/3"
      }
    ],
    "break": false
  },
  {
    "id": 76,
    "source": 5144392,
    "sourceName": "CE201M01CBGP00601HW58",
    "sourceIp": "10.80.1.129",
    "sourceTier": 2,
    "target": 5143734,
    "targetName": "CBGP00601GC08",
    "targetIp": "10.80.1.139",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "GE0/0/1",
        "targetPort": "e1/1"
      }
    ]
  },
  {
    "id": 77,
    "source": 5141665,
    "sourceName": "DI201M01CBGM00101HW24",
    "sourceIp": "10.80.0.1",
    "sourceTier": 2,
    "target": 5143815,
    "targetName": "CE201M01CBGP10001HW67",
    "targetIp": "10.80.5.129",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "XGE2/0/21",
        "targetPort": "XGE2/0/18"
      },
      {
        "sourcePort": "XGE2/0/15",
        "targetPort": "XGE2/0/16"
      },
      {
        "sourcePort": "XGE1/0/21",
        "targetPort": "XGE1/0/18"
      },
      {
        "sourcePort": "XGE1/0/23",
        "targetPort": "XGE2/0/19"
      },
      {
        "sourcePort": "XGE1/0/15",
        "targetPort": "XGE1/0/16"
      }
    ],
    "break": false
  },
  {
    "id": 82,
    "source": 5142126,
    "sourceName": "CE201M01LSNV00101HW24",
    "sourceIp": "10.115.11.65",
    "sourceTier": 2,
    "target": 5143815,
    "targetName": "CE201M01CBGP10001HW67",
    "targetIp": "10.80.5.129",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "XGE1/0/14",
        "targetPort": "XGE2/0/17"
      },
      {
        "sourcePort": "XGE1/0/13",
        "targetPort": "XGE2/0/20"
      },
      {
        "sourcePort": "XGE0/0/13",
        "targetPort": "XGE1/0/20"
      },
      {
        "sourcePort": "XGE0/0/12",
        "targetPort": "XGE1/0/19"
      },
      {
        "sourcePort": "XGE0/0/14",
        "targetPort": "XGE1/0/17"
      }
    ],
    "break": false
  },
  {
    "id": 87,
    "source": 5142529,
    "sourceName": "CBGP10001HW57",
    "sourceIp": "10.80.5.149",
    "sourceTier": 2,
    "target": 5143815,
    "targetName": "CE201M01CBGP10001HW67",
    "targetIp": "10.80.5.129",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "XGE0/0/1",
        "targetPort": "XGE1/0/15"
      }
    ],
    "break": false
  },
  {
    "id": 89,
    "source": 5141665,
    "sourceName": "DI201M01CBGM00101HW24",
    "sourceIp": "10.80.0.1",
    "sourceTier": 2,
    "target": 5144102,
    "targetName": "CE201M01CBGP00501HW24",
    "targetIp": "10.80.1.1",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "XGE1/0/4",
        "targetPort": "XGE0/0/23"
      },
      {
        "sourcePort": "XGE2/0/4",
        "targetPort": "XGE0/0/24"
      }
    ],
    "break": false
  },
  {
    "id": 91,
    "source": 5142448,
    "sourceName": "CBGP00502GC16",
    "sourceIp": "10.80.1.12",
    "sourceTier": 2,
    "target": 5144102,
    "targetName": "CE201M01CBGP00501HW24",
    "targetIp": "10.80.1.1",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "e1/1",
        "targetPort": "XGigabitEthernet0/0/4"
      },
      {
        "sourcePort": "e1/1",
        "targetPort": "XGigabitEthernet0/0/3"
      }
    ],
    "break": false
  },
  {
    "id": 93,
    "source": 5143025,
    "sourceName": "CBGP00501GC57",
    "sourceIp": "10.80.1.11",
    "sourceTier": 2,
    "target": 5144102,
    "targetName": "CE201M01CBGP00501HW24",
    "targetIp": "10.80.1.1",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "e0/1",
        "targetPort": "XGigabitEthernet0/0/1"
      },
      {
        "sourcePort": "e0/2",
        "targetPort": "XGigabitEthernet0/0/2"
      }
    ],
    "break": false
  },
  {
    "id": 96,
    "source": 5141665,
    "sourceName": "DI201M01CBGM00101HW24",
    "sourceIp": "10.80.0.1",
    "sourceTier": 2,
    "target": 5144392,
    "targetName": "CE201M01CBGP00601HW58",
    "targetIp": "10.80.1.129",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "XGE1/0/6",
        "targetPort": "XGE0/0/3"
      },
      {
        "sourcePort": "XGE2/0/6",
        "targetPort": "XGE0/0/4"
      }
    ],
    "break": false
  },
  {
    "id": 99,
    "source": 5141665,
    "sourceName": "DI201M01CBGM00101HW24",
    "sourceIp": "10.80.0.1",
    "sourceTier": 2,
    "target": 5144679,
    "targetName": "CE201M01CBGP00301HW67",
    "targetIp": "10.80.0.193",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "XGE1/0/3",
        "targetPort": "XGE0/0/23"
      },
      {
        "sourcePort": "XGE2/0/3",
        "targetPort": "XGE0/0/24"
      }
    ],
    "break": false
  },
  {
    "id": 101,
    "source": 5141437,
    "sourceName": "CBGP00302GC57",
    "sourceIp": "10.80.0.204",
    "sourceTier": 2,
    "target": 5144679,
    "targetName": "CE201M01CBGP00301HW67",
    "targetIp": "10.80.0.193",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "e1/2",
        "targetPort": "XGigabitEthernet0/0/4"
      },
      {
        "sourcePort": "e1/1",
        "targetPort": "XGigabitEthernet0/0/3"
      }
    ],
    "break": false
  },
  {
    "id": 105,
    "source": 5145166,
    "sourceName": "CBGP00301GC57",
    "sourceIp": "10.80.0.203",
    "sourceTier": 2,
    "target": 5144679,
    "targetName": "CE201M01CBGP00301HW67",
    "targetIp": "10.80.0.193",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "e1/1",
        "targetPort": "XGigabitEthernet0/0/1"
      },
      {
        "sourcePort": "e1/2",
        "targetPort": "XGigabitEthernet0/0/2"
      }
    ],
    "break": false
  },
  {
    "id": 108,
    "source": 5141665,
    "sourceName": "DI201M01CBGM00101HW24",
    "sourceIp": "10.80.0.1",
    "sourceTier": 2,
    "target": 5144820,
    "targetName": "CBGM00102HW57",
    "targetIp": "10.80.0.22",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "XGE1/0/14",
        "targetPort": "XGE0/0/1"
      },
      {
        "sourcePort": "XGE2/0/14",
        "targetPort": "XGE0/0/2"
      }
    ],
    "break": false
  },
  {
    "id": 111,
    "source": 5141665,
    "sourceName": "DI201M01CBGM00101HW24",
    "sourceIp": "10.80.0.1",
    "sourceTier": 2,
    "target": 5145104,
    "targetName": "CE201M01CBGP00201HW24",
    "targetIp": "10.80.2.65",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "XGE1/0/9",
        "targetPort": "XGE0/0/23"
      },
      {
        "sourcePort": "XGE2/0/9",
        "targetPort": "XGE0/0/24"
      }
    ],
    "break": false
  },
  {
    "id": 113,
    "source": 5145026,
    "sourceName": "CBGP00201GC57",
    "sourceIp": "10.80.2.75",
    "sourceTier": 2,
    "target": 5145104,
    "targetName": "CE201M01CBGP00201HW24",
    "targetIp": "10.80.2.65",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "e0/1",
        "targetPort": "XGigabitEthernet0/0/1"
      },
      {
        "sourcePort": "e0/1",
        "targetPort": "XGigabitEthernet0/0/2"
      }
    ],
    "break": false
  },
  {
    "id": 115,
    "source": 5144599,
    "sourceName": "CBGP00202GC08",
    "sourceIp": "10.80.2.76",
    "sourceTier": 2,
    "target": 5145104,
    "targetName": "CE201M01CBGP00201HW24",
    "targetIp": "10.80.2.65",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "e1/1",
        "targetPort": "XGigabitEthernet0/0/3"
      },
      {
        "sourcePort": "e1/1",
        "targetPort": "XGigabitEthernet0/0/4"
      }
    ],
    "break": false
  },
  {
    "id": 118,
    "source": 5144679,
    "sourceName": "CE201M01CBGP00301HW67",
    "sourceIp": "10.80.0.193",
    "sourceTier": 2,
    "target": 5145249,
    "targetName": "CBGP00302HW57",
    "targetIp": "10.80.0.213",
    "targetTier": 2,
    "listSubPort": [
      {
        "sourcePort": "XGE0/0/21",
        "targetPort": "GE0/0/21"
      },
      {
        "sourcePort": "XGE0/0/22",
        "targetPort": "GE0/0/22"
      }
    ],
    "break": false
  }
]
class Graph2 {
  constructor(nodes = [], edges = []) {
    this.nodes = [];
    this.edges = {};

    this.addEdges(edges);
    this.addNodes(nodes);
  }
  addNode(node) {
    if (node.name) {
      this.nodes.push(node);
      this.edges[node.name] = [];
    }
  }
  addNodes(nodes = []) {
    nodes.forEach(node => this.addNode(node));
  }
  addEdge(edge) {
    const { sourceName, targetName } = edge;
    if (this.edges[sourceName]) {
      this.edges[sourceName].push(targetName);
    }
  }
  addEdges(edges = []) {
    edges.forEach(edge => this.addEdge(edge));
  }

  display() {
    let graphTxt = "";
    this.nodes.forEach(node => {
      graphTxt += node.name + "=>" + this.edges[node.name] + "\n";
    })
    console.log(graphTxt);
  }

  /**
   * Lấy ra các node đã được set level
   * - :return: danh sách các node đã được set level
   */
  getNodesSettedLevel() {
    const setNodes = new Set();
    for (const node of this.nodes) {
      if (node.name) {
        setNodes[node.name] = node;
      }
    }
    const queue = new ArrayQueue(this.nodes.length);
    const explored = new Set();

    const roots = this.nodes.filter(node => node.name ? node.name.includes("-MP-") : false);
    if (roots.length === 0) return console.log("roots == 0");
    const settedNodeLevel = [...roots.map(node => ({ ...node, level: 0 }))];

    for (const rootNode of settedNodeLevel) {
      explored.add(rootNode.name);
      queue.enqueue(rootNode);

      while (!queue.isEmpty()) {
        const tempNode = queue.dequeue();
        // lấy ra các con
        const childNode = tempNode ? this.edges[tempNode.name] : []
        // các node con chưa được ghé thăm
        const childNodeUnExplored = childNode.filter(nodeName => !explored.has(nodeName))
        childNodeUnExplored.forEach(nodeName => {
          explored.add(nodeName);
          const nodeAddedLevel = { ...setNodes[nodeName], level: tempNode.level + 1 }
          settedNodeLevel.push(nodeAddedLevel)
          queue.enqueue(nodeAddedLevel);
        });
      }

    }
    return settedNodeLevel
  }
}

const graph = new Graph2(nodes, links);
graph.getNodesSettedLevel();