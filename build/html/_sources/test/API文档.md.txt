# API 接口文档

## 基本信息

- **基础URL**: `http://localhost:3001/api`
- **数据格式**: JSON
- **字符编码**: UTF-8

## 通用响应格式

### 成功响应
```json
{
  "success": true,
  "data": {},
  "message": "操作成功"
}
```

### 失败响应
```json
{
  "success": false,
  "message": "错误信息",
  "error": "详细错误描述"
}
```

---

## 1. 健康检查

### 1.1 检查服务状态

**接口地址**: `GET /health`

**请求参数**: 无

**响应示例**:
```json
{
  "status": "ok",
  "message": "Server is running",
  "timestamp": "2024-01-11T12:00:00.000Z"
}
```

---

## 2. 用户管理接口

### 2.1 获取用户列表

**接口地址**: `GET /users`

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| page | number | 否 | 页码，默认1 |
| pageSize | number | 否 | 每页数量，默认10 |
| keyword | string | 否 | 搜索关键词（姓名或邮箱） |

**请求示例**:
```
GET /api/users?page=1&pageSize=10&keyword=张
```

**响应示例**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "张三",
      "email": "zhangsan@example.com",
      "age": 25
    }
  ],
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "total": 1,
    "totalPages": 1
  }
}
```

---

### 2.2 获取单个用户

**接口地址**: `GET /users/:id`

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | number | 是 | 用户ID |

**请求示例**:
```
GET /api/users/1
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "张三",
    "email": "zhangsan@example.com",
    "age": 25
  }
}
```

**错误响应** (404):
```json
{
  "success": false,
  "message": "用户不存在"
}
```

---

### 2.3 创建用户

**接口地址**: `POST /users`

**请求头**:
```
Content-Type: application/json
```

**请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| name | string | 是 | 用户姓名 |
| email | string | 是 | 用户邮箱 |
| age | number | 是 | 用户年龄 |

**请求示例**:
```json
{
  "name": "赵六",
  "email": "zhaoliu@example.com",
  "age": 28
}
```

**响应示例** (201):
```json
{
  "success": true,
  "message": "用户创建成功",
  "data": {
    "id": 4,
    "name": "赵六",
    "email": "zhaoliu@example.com",
    "age": 28
  }
}
```

**错误响应** (400):
```json
{
  "success": false,
  "message": "缺少必要字段：name, email, age"
}
```

---

### 2.4 更新用户

**接口地址**: `PUT /users/:id`

**请求头**:
```
Content-Type: application/json
```

**路径参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | number | 是 | 用户ID |

**请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| name | string | 否 | 用户姓名 |
| email | string | 否 | 用户邮箱 |
| age | number | 否 | 用户年龄 |

**请求示例**:
```json
{
  "name": "赵六六",
  "age": 29
}
```

**响应示例**:
```json
{
  "success": true,
  "message": "用户更新成功",
  "data": {
    "id": 4,
    "name": "赵六六",
    "email": "zhaoliu@example.com",
    "age": 29
  }
}
```

---

### 2.5 删除用户

**接口地址**: `DELETE /users/:id`

**路径参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | number | 是 | 用户ID |

**请求示例**:
```
DELETE /api/users/4
```

**响应示例**:
```json
{
  "success": true,
  "message": "用户删除成功"
}
```

---

## 3. 商品管理接口

### 3.1 获取商品列表

**接口地址**: `GET /products`

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| category | string | 否 | 商品分类 |
| minPrice | number | 否 | 最低价格 |
| maxPrice | number | 否 | 最高价格 |

**请求示例**:
```
GET /api/products?category=电子产品&minPrice=100&maxPrice=1000
```

**响应示例**:
```json
{
  "success": true,
  "data": [
    {
      "id": 2,
      "name": "无线鼠标",
      "price": 99,
      "stock": 200,
      "category": "电子产品"
    },
    {
      "id": 3,
      "name": "机械键盘",
      "price": 299,
      "stock": 150,
      "category": "电子产品"
    }
  ],
  "total": 2
}
```

---

### 3.2 获取单个商品

**接口地址**: `GET /products/:id`

**路径参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | number | 是 | 商品ID |

**请求示例**:
```
GET /api/products/1
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "笔记本电脑",
    "price": 5999,
    "stock": 50,
    "category": "电子产品"
  }
}
```

---

## 4. 订单管理接口

### 4.1 创建订单

**接口地址**: `POST /orders`

**请求头**:
```
Content-Type: application/json
```

**请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | number | 是 | 用户ID |
| items | array | 是 | 商品列表 |
| items[].productId | number | 是 | 商品ID |
| items[].quantity | number | 是 | 商品数量 |

**请求示例**:
```json
{
  "userId": 1,
  "items": [
    {
      "productId": 2,
      "quantity": 2
    },
    {
      "productId": 3,
      "quantity": 1
    }
  ]
}
```

**响应示例** (201):
```json
{
  "success": true,
  "message": "订单创建成功",
  "data": {
    "id": 1,
    "userId": 1,
    "userName": "张三",
    "items": [
      {
        "productId": 2,
        "productName": "无线鼠标",
        "price": 99,
        "quantity": 2,
        "subtotal": 198
      },
      {
        "productId": 3,
        "productName": "机械键盘",
        "price": 299,
        "quantity": 1,
        "subtotal": 299
      }
    ],
    "totalAmount": 497,
    "status": "pending",
    "createdAt": "2024-01-11T12:00:00.000Z"
  }
}
```

**错误响应** (400):
```json
{
  "success": false,
  "message": "商品 笔记本电脑 库存不足"
}
```

---

### 4.2 获取订单列表

**接口地址**: `GET /orders`

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| userId | number | 否 | 用户ID |
| status | string | 否 | 订单状态 |

**订单状态枚举值**:
- `pending`: 待支付
- `paid`: 已支付
- `shipped`: 已发货
- `delivered`: 已送达
- `cancelled`: 已取消

**请求示例**:
```
GET /api/orders?userId=1&status=pending
```

**响应示例**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "userId": 1,
      "userName": "张三",
      "items": [...],
      "totalAmount": 497,
      "status": "pending",
      "createdAt": "2024-01-11T12:00:00.000Z"
    }
  ],
  "total": 1
}
```

---

### 4.3 获取单个订单

**接口地址**: `GET /orders/:id`

**路径参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | number | 是 | 订单ID |

**请求示例**:
```
GET /api/orders/1
```

**响应示例**:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "userId": 1,
    "userName": "张三",
    "items": [...],
    "totalAmount": 497,
    "status": "pending",
    "createdAt": "2024-01-11T12:00:00.000Z"
  }
}
```

---

### 4.4 更新订单状态

**接口地址**: `PUT /orders/:id/status`

**请求头**:
```
Content-Type: application/json
```

**路径参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | number | 是 | 订单ID |

**请求体**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| status | string | 是 | 订单状态 |

**请求示例**:
```json
{
  "status": "paid"
}
```

**响应示例**:
```json
{
  "success": true,
  "message": "订单状态更新成功",
  "data": {
    "id": 1,
    "userId": 1,
    "userName": "张三",
    "items": [...],
    "totalAmount": 497,
    "status": "paid",
    "createdAt": "2024-01-11T12:00:00.000Z",
    "updatedAt": "2024-01-11T12:05:00.000Z"
  }
}
```

---

## 错误码说明

| HTTP状态码 | 说明 |
|------------|------|
| 200 | 请求成功 |
| 201 | 创建成功 |
| 400 | 请求参数错误 |
| 404 | 资源不存在 |
| 500 | 服务器内部错误 |

---

## 数据模型

### User（用户）
```typescript
{
  id: number;
  name: string;
  email: string;
  age: number;
}
```

### Product（商品）
```typescript
{
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
}
```

### Order（订单）
```typescript
{
  id: number;
  userId: number;
  userName: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  updatedAt?: string;
}
```

### OrderItem（订单项）
```typescript
{
  productId: number;
  productName: string;
  price: number;
  quantity: number;
  subtotal: number;
}
```
