# Dune Analytics Dashboard – Terminal of Truths

## 📊 Suggested Queries

### 📈 Token Distribution Over Time
```sql
SELECT
  block_time,
  from_address,
  to_address,
  value / 1e18 AS trth_amount
FROM erc20."TokenTransfers"
WHERE contract_address = LOWER('0xYOUR_TRTH_TOKEN_ADDRESS')
```

### 📥 Daily Confessions via Event Logs
```sql
SELECT
  date_trunc('day', evt_block_time) as day,
  count(*) as confessions
FROM logs."EventLog"
WHERE contract_address = LOWER('0xYOUR_CONFESSION_CONTRACT')
AND evt_topic_1 = '0xYOUR_CONFESSION_EVENT_TOPIC'
GROUP BY 1
ORDER BY 1
```

### 🧍‍♂️ Top Stakers
```sql
SELECT
  from_address,
  SUM(value) / 1e18 as total_staked
FROM erc20."TokenTransfers"
WHERE contract_address = LOWER('0xYOUR_TRTH_TOKEN_ADDRESS')
  AND to_address = '0xYOUR_STAKING_CONTRACT'
GROUP BY 1
ORDER BY total_staked DESC
```

Replace placeholders with real values after deployment.
