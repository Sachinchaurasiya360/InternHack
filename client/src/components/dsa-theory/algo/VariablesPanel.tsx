
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
E
f
f
e
c
t
,
 
u
s
e
S
t
a
t
e
 
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




t
y
p
e
 
V
a
r
V
a
l
u
e
 
=
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
b
o
o
l
e
a
n
 
|
 
u
n
d
e
f
i
n
e
d
;




i
n
t
e
r
f
a
c
e
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
P
r
o
p
s
 
{


 
 
v
a
r
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
V
a
r
V
a
l
u
e
>
;


 
 
f
l
a
s
h
K
e
y
s
?
:
 
s
t
r
i
n
g
[
]
;


 
 
t
i
t
l
e
?
:
 
s
t
r
i
n
g
;


}




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
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
(
{
 
v
a
r
s
,
 
f
l
a
s
h
K
e
y
s
,
 
t
i
t
l
e
 
=
 
"
v
a
r
i
a
b
l
e
s
"
 
}
:
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
[
f
l
a
s
h
i
n
g
,
 
s
e
t
F
l
a
s
h
i
n
g
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
<
S
e
t
<
s
t
r
i
n
g
>
>
(
n
e
w
 
S
e
t
(
)
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


 
 
 
 
i
f
 
(
!
f
l
a
s
h
K
e
y
s
 
|
|
 
f
l
a
s
h
K
e
y
s
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
r
e
t
u
r
n
;


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
s
e
t
F
l
a
s
h
i
n
g
(
n
e
w
 
S
e
t
(
f
l
a
s
h
K
e
y
s
)
)
;


 
 
 
 
c
o
n
s
t
 
t
 
=
 
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
F
l
a
s
h
i
n
g
(
n
e
w
 
S
e
t
(
)
)
,
 
4
5
0
)
;


 
 
 
 
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
(
t
)
;


 
 
}
,
 
[
f
l
a
s
h
K
e
y
s
,
 
v
a
r
s
]
)
;




 
 
c
o
n
s
t
 
e
n
t
r
i
e
s
 
=
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
v
a
r
s
)
.
f
i
l
t
e
r
(
(
[
,
 
v
]
)
 
=
>
 
v
 
!
=
=
 
u
n
d
e
f
i
n
e
d
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
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
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
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
p
x
-
3
 
p
y
-
2
 
b
o
r
d
e
r
-
b
 
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
"
>


 
 
 
 
 
 
 
 
/
 
{
t
i
t
l
e
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
e
n
t
r
i
e
s
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
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
p
x
-
3
 
p
y
-
3
 
t
e
x
t
-
[
1
1
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
n
o
 
v
a
r
i
a
b
l
e
s
 
y
e
t
<
/
d
i
v
>


 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
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
d
i
v
i
d
e
-
y
 
d
i
v
i
d
e
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
d
i
v
i
d
e
-
w
h
i
t
e
/
5
"
>


 
 
 
 
 
 
 
 
 
 
{
e
n
t
r
i
e
s
.
m
a
p
(
(
[
k
,
 
v
]
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
l
a
s
h
 
=
 
f
l
a
s
h
i
n
g
.
h
a
s
(
k
)
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
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
k
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
b
e
t
w
e
e
n
 
g
a
p
-
3
 
p
x
-
3
 
p
y
-
1
.
5
 
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
x
s
 
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
c
o
l
o
r
s
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
a
s
h
 
?
 
"
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
/
1
5
"
 
:
 
"
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
t
r
u
n
c
a
t
e
"
>
{
k
}
<
/
s
p
a
n
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
{
`
f
o
n
t
-
b
o
l
d
 
t
a
b
u
l
a
r
-
n
u
m
s
 
t
r
u
n
c
a
t
e
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
a
s
h
 
?
 
"
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
l
i
m
e
-
3
0
0
"
 
:
 
"
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
9
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
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
t
r
i
n
g
(
v
)
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


