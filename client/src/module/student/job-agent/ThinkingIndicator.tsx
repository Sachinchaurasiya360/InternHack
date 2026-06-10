
i
m
p
o
r
t
 
{
 
u
s
e
S
t
a
t
e
,
 
u
s
e
E
f
f
e
c
t
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{
 
U
s
e
r
,
 
S
e
a
r
c
h
,
 
Z
a
p
,
 
B
a
r
C
h
a
r
t
3
,
 
C
h
e
c
k
C
i
r
c
l
e
2
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;




c
o
n
s
t
 
S
T
E
P
S
 
=
 
[


 
 
{
 
i
c
o
n
:
 
U
s
e
r
,
 
t
e
x
t
:
 
"
A
n
a
l
y
z
i
n
g
 
y
o
u
r
 
p
r
o
f
i
l
e
"
,
 
d
e
l
a
y
:
 
0
 
}
,


 
 
{
 
i
c
o
n
:
 
S
e
a
r
c
h
,
 
t
e
x
t
:
 
"
S
e
a
r
c
h
i
n
g
 
j
o
b
 
d
a
t
a
b
a
s
e
"
,
 
d
e
l
a
y
:
 
2
0
0
0
 
}
,


 
 
{
 
i
c
o
n
:
 
Z
a
p
,
 
t
e
x
t
:
 
"
M
a
t
c
h
i
n
g
 
w
i
t
h
 
y
o
u
r
 
s
k
i
l
l
s
"
,
 
d
e
l
a
y
:
 
4
5
0
0
 
}
,


 
 
{
 
i
c
o
n
:
 
B
a
r
C
h
a
r
t
3
,
 
t
e
x
t
:
 
"
R
a
n
k
i
n
g
 
b
e
s
t
 
m
a
t
c
h
e
s
"
,
 
d
e
l
a
y
:
 
7
0
0
0
 
}
,


 
 
{
 
i
c
o
n
:
 
C
h
e
c
k
C
i
r
c
l
e
2
,
 
t
e
x
t
:
 
"
A
l
m
o
s
t
 
t
h
e
r
e
"
,
 
d
e
l
a
y
:
 
1
0
0
0
0
 
}
,


]
;




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
T
h
i
n
k
i
n
g
I
n
d
i
c
a
t
o
r
(
)
 
{


 
 
c
o
n
s
t
 
[
s
t
e
p
I
n
d
e
x
,
 
s
e
t
S
t
e
p
I
n
d
e
x
]
 
=
 
u
s
e
S
t
a
t
e
(
0
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
t
i
m
e
r
s
:
 
R
e
t
u
r
n
T
y
p
e
<
t
y
p
e
o
f
 
s
e
t
T
i
m
e
o
u
t
>
[
]
 
=
 
[
]
;


 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
1
;
 
i
 
<
 
S
T
E
P
S
.
l
e
n
g
t
h
;
 
i
+
+
)
 
{


 
 
 
 
 
 
t
i
m
e
r
s
.
p
u
s
h
(


 
 
 
 
 
 
 
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
s
e
t
S
t
e
p
I
n
d
e
x
(
i
)
,
 
S
T
E
P
S
[
i
]
.
d
e
l
a
y
)
,


 
 
 
 
 
 
)
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
t
i
m
e
r
s
.
f
o
r
E
a
c
h
(
c
l
e
a
r
T
i
m
e
o
u
t
)
;


 
 
}
,
 
[
]
)
;




 
 
c
o
n
s
t
 
s
t
e
p
 
=
 
S
T
E
P
S
[
s
t
e
p
I
n
d
e
x
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
8
 
}
}


 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
g
a
p
-
3
"


 
 
 
 
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
w
-
8
 
h
-
8
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
s
t
o
n
e
-
7
0
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
<
i
m
g
 
s
r
c
=
"
/
l
o
g
o
.
p
n
g
"
 
a
l
t
=
"
I
n
t
e
r
n
H
a
c
k
"
 
c
l
a
s
s
N
a
m
e
=
"
w
-
5
 
h
-
5
 
o
b
j
e
c
t
-
c
o
n
t
a
i
n
"
 
/
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
h
-
1
 
w
-
1
 
b
g
-
l
i
m
e
-
4
0
0
 
a
n
i
m
a
t
e
-
p
u
l
s
e
"
>
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
a
g
e
n
t
,
 
t
h
i
n
k
i
n
g


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
x
-
4
 
p
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
t
e
p
 
p
r
o
g
r
e
s
s
 
b
a
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
m
b
-
2
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
S
T
E
P
S
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
h
-
0
.
5
 
r
o
u
n
d
e
d
-
n
o
n
e
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
d
u
r
a
t
i
o
n
-
5
0
0
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
 
<
 
s
t
e
p
I
n
d
e
x


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
w
-
6
 
b
g
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
i
 
=
=
=
 
s
t
e
p
I
n
d
e
x


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
w
-
6
 
b
g
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
w
-
2
 
b
g
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
g
-
w
h
i
t
e
/
1
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
u
r
r
e
n
t
 
s
t
e
p
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
t
e
p
I
n
d
e
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
x
:
 
-
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
x
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
x
:
 
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
e
p
.
i
c
o
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
 
t
e
x
t
-
l
i
m
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
{
S
t
r
i
n
g
(
s
t
e
p
I
n
d
e
x
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
}
 
{
s
t
e
p
.
t
e
x
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
)
;


}


