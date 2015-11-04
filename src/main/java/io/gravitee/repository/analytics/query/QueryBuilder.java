/**
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.gravitee.repository.analytics.query;

import io.gravitee.repository.analytics.model.*;

/**
 * @author David BRASSELY (brasseld at gmail.com)
 */
public class QueryBuilder {

    private Query query;

    private QueryBuilder() {
        query = new Query();
    }

    public static QueryBuilder Query() {
        return new QueryBuilder();
    }

    public QueryBuilder period(DateRangeQuery dateRangeQuery) {
        query.dateRange(dateRangeQuery);
        return this;
    }

    public QueryBuilder type(QueryType type) {
        query.type(type);
        return this;
    }

    public QueryBuilder filter(FilterQuery filterQuery) {
        query.filter(filterQuery);
        return this;
    }

    public QueryBuilder interval(IntervalQuery intervalQuery) {
        query.interval(intervalQuery);
        return this;
    }

    public Query build() {
        return query;
    }
}
