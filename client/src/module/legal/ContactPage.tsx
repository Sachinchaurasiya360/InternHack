
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
 
M
a
i
l
,
 
G
l
o
b
e
,
 
C
l
o
c
k
3
,
 
B
u
g
,
 
L
o
a
d
e
r
2
,
 
S
e
n
d
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
,
 
A
l
e
r
t
C
i
r
c
l
e
,
 
U
s
e
r
,
 
T
a
g
,
 
M
e
s
s
a
g
e
S
q
u
a
r
e
 
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


i
m
p
o
r
t
 
{
 
N
a
v
b
a
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
N
a
v
b
a
r
"
;


i
m
p
o
r
t
 
{
 
F
o
o
t
e
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
F
o
o
t
e
r
"
;


i
m
p
o
r
t
 
{
 
S
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
S
E
O
"
;


i
m
p
o
r
t
 
{
 
B
u
t
t
o
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
b
u
t
t
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
 
a
p
i
 
f
r
o
m
 
"
.
.
/
.
.
/
l
i
b
/
a
x
i
o
s
"
;




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
C
o
n
t
a
c
t
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
[
f
o
r
m
D
a
t
a
,
 
s
e
t
F
o
r
m
D
a
t
a
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
{
 
n
a
m
e
:
 
"
"
,
 
e
m
a
i
l
:
 
"
"
,
 
s
u
b
j
e
c
t
:
 
"
"
,
 
m
e
s
s
a
g
e
:
 
"
"
 
}
)
;


 
 
c
o
n
s
t
 
[
l
o
a
d
i
n
g
,
 
s
e
t
L
o
a
d
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
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
s
u
c
c
e
s
s
,
 
s
e
t
S
u
c
c
e
s
s
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
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
e
r
r
o
r
,
 
s
e
t
E
r
r
o
r
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
"
"
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
C
h
a
n
g
e
 
=
 
(
e
:
 
R
e
a
c
t
.
C
h
a
n
g
e
E
v
e
n
t
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
 
|
 
H
T
M
L
T
e
x
t
A
r
e
a
E
l
e
m
e
n
t
>
)
 
=
>
 
{


 
 
 
 
s
e
t
F
o
r
m
D
a
t
a
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
[
e
.
t
a
r
g
e
t
.
n
a
m
e
]
:
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
)
)
;


 
 
}
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
S
u
b
m
i
t
 
=
 
a
s
y
n
c
 
(
e
:
 
R
e
a
c
t
.
F
o
r
m
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
t
r
u
e
)
;


 
 
 
 
s
e
t
E
r
r
o
r
(
"
"
)
;


 
 
 
 
s
e
t
S
u
c
c
e
s
s
(
f
a
l
s
e
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
(
"
/
c
o
n
t
a
c
t
"
,
 
f
o
r
m
D
a
t
a
)
;


 
 
 
 
 
 
s
e
t
S
u
c
c
e
s
s
(
t
r
u
e
)
;


 
 
 
 
 
 
s
e
t
F
o
r
m
D
a
t
a
(
{
 
n
a
m
e
:
 
"
"
,
 
e
m
a
i
l
:
 
"
"
,
 
s
u
b
j
e
c
t
:
 
"
"
,
 
m
e
s
s
a
g
e
:
 
"
"
 
}
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
"
S
o
m
e
t
h
i
n
g
 
w
e
n
t
 
w
r
o
n
g
.
 
P
l
e
a
s
e
 
t
r
y
 
a
g
a
i
n
 
o
r
 
e
m
a
i
l
 
u
s
 
d
i
r
e
c
t
l
y
.
"
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
}


 
 
}
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
m
i
n
-
h
-
s
c
r
e
e
n
 
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
[
#
0
7
0
7
0
7
]
"
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
C
o
n
t
a
c
t
 
U
s
"


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
"
G
e
t
 
i
n
 
t
o
u
c
h
 
w
i
t
h
 
t
h
e
 
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
 
t
e
a
m
 
f
o
r
 
s
u
p
p
o
r
t
,
 
f
e
e
d
b
a
c
k
,
 
o
r
 
b
u
s
i
n
e
s
s
 
e
n
q
u
i
r
i
e
s
.
"


 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
N
a
v
b
a
r
 
/
>




 
 
 
 
 
 
<
m
a
i
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
f
l
e
x
-
1
 
m
a
x
-
w
-
5
x
l
 
m
x
-
a
u
t
o
 
p
x
-
4
 
p
t
-
2
8
 
p
b
-
1
6
"
>


 
 
 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
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
m
b
-
1
2
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
<
h
1
 
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
4
x
l
 
s
m
:
t
e
x
t
-
5
x
l
 
m
d
:
t
e
x
t
-
6
x
l
 
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
r
a
c
k
i
n
g
-
t
i
g
h
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
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
C
o
n
t
a
c
t
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
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
r
e
l
a
t
i
v
e
 
i
n
l
i
n
e
-
b
l
o
c
k
"
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
r
e
l
a
t
i
v
e
 
z
-
1
0
"
>
U
s
.
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
c
a
l
e
X
:
 
0
 
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
 
s
c
a
l
e
X
:
 
1
 
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
7
,
 
d
e
l
a
y
:
 
0
.
5
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
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
a
b
s
o
l
u
t
e
 
b
o
t
t
o
m
-
1
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
h
-
3
 
m
d
:
h
-
4
 
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
 
o
r
i
g
i
n
-
l
e
f
t
 
z
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
 
 
<
p
 
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
b
a
s
e
 
t
e
x
t
-
g
r
a
y
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
g
r
a
y
-
4
0
0
 
m
a
x
-
w
-
2
x
l
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
W
e
'
d
 
l
o
v
e
 
t
o
 
h
e
a
r
 
f
r
o
m
 
y
o
u
.
 
R
e
a
c
h
 
o
u
t
 
f
o
r
 
s
u
p
p
o
r
t
,
 
f
e
e
d
b
a
c
k
,


 
 
 
 
 
 
 
 
 
 
 
 
p
a
r
t
n
e
r
s
h
i
p
s
,
 
o
r
 
g
e
n
e
r
a
l
 
e
n
q
u
i
r
i
e
s
.


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
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
o
n
t
a
c
t
 
F
o
r
m
 
*
/
}


 
 
 
 
 
 
 
 
<
f
o
r
m
 
o
n
S
u
b
m
i
t
=
{
h
a
n
d
l
e
S
u
b
m
i
t
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
m
b
-
1
0
 
s
p
a
c
e
-
y
-
4
 
r
o
u
n
d
e
d
-
2
x
l
 
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
g
r
a
y
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
g
r
a
y
-
9
0
0
 
b
g
-
w
h
i
t
e
/
7
0
 
d
a
r
k
:
b
g
-
[
#
0
7
0
7
0
7
]
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
 
p
-
6
 
s
h
a
d
o
w
-
s
m
 
h
o
v
e
r
:
b
o
r
d
e
r
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
4
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
/
4
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
[
0
_
0
_
1
6
p
x
_
r
g
b
a
(
1
6
3
,
2
3
0
,
5
3
,
0
.
0
5
)
]
 
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
"
>


 
 
 
 
 
 
 
 
 
 
<
h
2
 
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
l
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
"
>
S
e
n
d
 
u
s
 
a
 
m
e
s
s
a
g
e
<
/
h
2
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
g
a
p
-
4
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
N
a
m
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
h
t
m
l
F
o
r
=
"
n
a
m
e
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
m
b
-
1
 
b
l
o
c
k
 
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
e
d
i
u
m
 
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
N
a
m
e
<
/
l
a
b
e
l
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
U
s
e
r
 
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
4
 
w
-
4
 
f
l
e
x
-
s
h
r
i
n
k
-
0
 
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
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
n
a
m
e
"
 
n
a
m
e
=
"
n
a
m
e
"
 
v
a
l
u
e
=
{
f
o
r
m
D
a
t
a
.
n
a
m
e
}
 
o
n
C
h
a
n
g
e
=
{
h
a
n
d
l
e
C
h
a
n
g
e
}
 
r
e
q
u
i
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
Y
o
u
r
 
n
a
m
e
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
f
u
l
l
 
r
o
u
n
d
e
d
-
l
g
 
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
g
r
a
y
-
3
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
g
r
a
y
-
7
0
0
 
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
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
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
 
p
l
a
c
e
h
o
l
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
4
0
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
1
 
f
o
c
u
s
:
r
i
n
g
-
l
i
m
e
-
5
0
0
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
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
E
m
a
i
l
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
h
t
m
l
F
o
r
=
"
e
m
a
i
l
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
m
b
-
1
 
b
l
o
c
k
 
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
e
d
i
u
m
 
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
E
m
a
i
l
<
/
l
a
b
e
l
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
i
l
 
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
4
 
w
-
4
 
f
l
e
x
-
s
h
r
i
n
k
-
0
 
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
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
e
m
a
i
l
"
 
n
a
m
e
=
"
e
m
a
i
l
"
 
t
y
p
e
=
"
e
m
a
i
l
"
 
v
a
l
u
e
=
{
f
o
r
m
D
a
t
a
.
e
m
a
i
l
}
 
o
n
C
h
a
n
g
e
=
{
h
a
n
d
l
e
C
h
a
n
g
e
}
 
r
e
q
u
i
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
y
o
u
@
e
x
a
m
p
l
e
.
c
o
m
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
f
u
l
l
 
r
o
u
n
d
e
d
-
l
g
 
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
g
r
a
y
-
3
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
g
r
a
y
-
7
0
0
 
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
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
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
 
p
l
a
c
e
h
o
l
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
4
0
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
1
 
f
o
c
u
s
:
r
i
n
g
-
l
i
m
e
-
5
0
0
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
u
b
j
e
c
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
h
t
m
l
F
o
r
=
"
s
u
b
j
e
c
t
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
m
b
-
1
 
b
l
o
c
k
 
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
e
d
i
u
m
 
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
S
u
b
j
e
c
t
<
/
l
a
b
e
l
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
a
g
 
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
4
 
w
-
4
 
f
l
e
x
-
s
h
r
i
n
k
-
0
 
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
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
s
u
b
j
e
c
t
"
 
n
a
m
e
=
"
s
u
b
j
e
c
t
"
 
v
a
l
u
e
=
{
f
o
r
m
D
a
t
a
.
s
u
b
j
e
c
t
}
 
o
n
C
h
a
n
g
e
=
{
h
a
n
d
l
e
C
h
a
n
g
e
}
 
r
e
q
u
i
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
W
h
a
t
'
s
 
t
h
i
s
 
a
b
o
u
t
?
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
f
u
l
l
 
r
o
u
n
d
e
d
-
l
g
 
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
g
r
a
y
-
3
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
g
r
a
y
-
7
0
0
 
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
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
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
 
p
l
a
c
e
h
o
l
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
4
0
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
1
 
f
o
c
u
s
:
r
i
n
g
-
l
i
m
e
-
5
0
0
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
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
M
e
s
s
a
g
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
h
t
m
l
F
o
r
=
"
m
e
s
s
a
g
e
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
m
b
-
1
 
b
l
o
c
k
 
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
e
d
i
u
m
 
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
M
e
s
s
a
g
e
<
/
l
a
b
e
l
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
s
t
a
r
t
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
s
s
a
g
e
S
q
u
a
r
e
 
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
m
t
-
2
 
h
-
4
 
w
-
4
 
f
l
e
x
-
s
h
r
i
n
k
-
0
 
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
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
m
e
s
s
a
g
e
"
 
n
a
m
e
=
"
m
e
s
s
a
g
e
"
 
r
o
w
s
=
{
5
}
 
v
a
l
u
e
=
{
f
o
r
m
D
a
t
a
.
m
e
s
s
a
g
e
}
 
o
n
C
h
a
n
g
e
=
{
h
a
n
d
l
e
C
h
a
n
g
e
}
 
r
e
q
u
i
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
T
e
l
l
 
u
s
 
w
h
a
t
'
s
 
o
n
 
y
o
u
r
 
m
i
n
d
.
.
.
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
f
u
l
l
 
r
o
u
n
d
e
d
-
l
g
 
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
g
r
a
y
-
3
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
g
r
a
y
-
7
0
0
 
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
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
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
 
p
l
a
c
e
h
o
l
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
4
0
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
1
 
f
o
c
u
s
:
r
i
n
g
-
l
i
m
e
-
5
0
0
 
r
e
s
i
z
e
-
y
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
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
e
r
r
o
r
 
&
&
 
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
 
r
o
u
n
d
e
d
-
l
g
 
b
g
-
r
e
d
-
5
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
2
0
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
x
s
 
t
e
x
t
-
r
e
d
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
r
e
d
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
C
i
r
c
l
e
 
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
3
.
5
 
w
-
3
.
5
 
f
l
e
x
-
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
r
r
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
{
s
u
c
c
e
s
s
 
&
&
 
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
 
r
o
u
n
d
e
d
-
l
g
 
b
g
-
e
m
e
r
a
l
d
-
5
0
 
d
a
r
k
:
b
g
-
e
m
e
r
a
l
d
-
9
0
0
/
2
0
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
x
s
 
t
e
x
t
-
e
m
e
r
a
l
d
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
e
m
e
r
a
l
d
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
3
.
5
 
w
-
3
.
5
 
f
l
e
x
-
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
M
e
s
s
a
g
e
 
s
e
n
t
!
 
W
e
'
l
l
 
g
e
t
 
b
a
c
k
 
t
o
 
y
o
u
 
w
i
t
h
i
n
 
2
4
-
4
8
 
h
o
u
r
s
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
t
y
p
e
=
"
s
u
b
m
i
t
"
 
v
a
r
i
a
n
t
=
"
m
o
n
o
"
 
s
i
z
e
=
"
l
g
"
 
d
i
s
a
b
l
e
d
=
{
l
o
a
d
i
n
g
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
w
-
f
u
l
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>
<
L
o
a
d
e
r
2
 
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
4
 
w
-
4
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>
 
S
e
n
d
i
n
g
.
.
.
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>
<
S
e
n
d
 
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
4
 
w
-
4
"
 
/
>
 
S
e
n
d
 
M
e
s
s
a
g
e
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
<
/
f
o
r
m
>




 
 
 
 
 
 
 
 
{
/
*
 
C
o
n
t
a
c
t
 
C
a
r
d
s
 
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
m
d
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
6
 
m
b
-
1
0
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
E
m
a
i
l
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
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
r
o
u
n
d
e
d
-
2
x
l
 
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
g
r
a
y
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
g
r
a
y
-
9
0
0
 
b
g
-
w
h
i
t
e
/
7
0
 
d
a
r
k
:
b
g
-
[
#
0
7
0
7
0
7
]
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
 
p
-
6
 
s
h
a
d
o
w
-
s
m
 
h
o
v
e
r
:
b
o
r
d
e
r
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
4
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
/
4
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
[
0
_
0
_
1
6
p
x
_
r
g
b
a
(
1
6
3
,
2
3
0
,
5
3
,
0
.
0
5
)
]
 
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
2
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
i
l
 
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
h
2
 
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
l
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
"
>
E
m
a
i
l
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
"
m
a
i
l
t
o
:
m
r
s
a
c
h
i
n
c
h
a
u
r
a
s
i
y
a
@
g
m
a
i
l
.
c
o
m
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
i
n
l
i
n
e
-
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
 
p
x
-
5
 
p
y
-
3
 
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
b
l
a
c
k
 
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
g
r
a
y
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
g
r
a
y
-
9
0
0
 
r
o
u
n
d
e
d
-
x
l
 
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
l
i
m
e
-
4
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
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
4
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
/
4
0
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
i
l
 
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
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
r
s
a
c
h
i
n
c
h
a
u
r
a
s
i
y
a
@
g
m
a
i
l
.
c
o
m


 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
m
t
-
4
 
t
e
x
t
-
s
m
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
t
e
x
t
-
g
r
a
y
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
g
r
a
y
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
F
o
r
 
g
e
n
e
r
a
l
 
e
n
q
u
i
r
i
e
s
,
 
s
u
p
p
o
r
t
 
r
e
q
u
e
s
t
s
,
 
f
e
a
t
u
r
e
 
s
u
g
g
e
s
t
i
o
n
s
,
 
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
u
s
i
n
e
s
s
 
p
a
r
t
n
e
r
s
h
i
p
s
,
 
d
r
o
p
 
u
s
 
a
n
 
e
m
a
i
l
 
a
n
d
 
w
e
'
l
l
 
r
e
s
p
o
n
d
 
w
i
t
h
i
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
2
4
-
4
8
 
h
o
u
r
s
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
u
p
p
o
r
t
 
H
o
u
r
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
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
r
o
u
n
d
e
d
-
2
x
l
 
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
g
r
a
y
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
g
r
a
y
-
9
0
0
 
b
g
-
w
h
i
t
e
/
7
0
 
d
a
r
k
:
b
g
-
[
#
0
7
0
7
0
7
]
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
 
p
-
6
 
s
h
a
d
o
w
-
s
m
 
h
o
v
e
r
:
b
o
r
d
e
r
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
4
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
/
4
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
[
0
_
0
_
1
6
p
x
_
r
g
b
a
(
1
6
3
,
2
3
0
,
5
3
,
0
.
0
5
)
]
 
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
2
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
l
o
c
k
3
 
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
h
2
 
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
l
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
"
>
S
u
p
p
o
r
t
 
H
o
u
r
s
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
m
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
t
e
x
t
-
g
r
a
y
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
g
r
a
y
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
O
u
r
 
t
e
a
m
 
o
p
e
r
a
t
e
s
 
M
o
n
d
a
y
 
t
o
 
S
a
t
u
r
d
a
y
,
 
1
0
:
0
0
 
A
M
 
-
 
7
:
0
0
 
P
M
 
I
S
T
.
 
W
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
i
m
 
t
o
 
r
e
s
p
o
n
d
 
t
o
 
a
l
l
 
q
u
e
r
i
e
s
 
w
i
t
h
i
n
 
2
4
-
4
8
 
h
o
u
r
s
 
d
u
r
i
n
g
 
b
u
s
i
n
e
s
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
a
y
s
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
s
e
c
t
i
o
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
m
d
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
e
p
o
r
t
 
I
s
s
u
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
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
r
o
u
n
d
e
d
-
2
x
l
 
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
g
r
a
y
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
g
r
a
y
-
9
0
0
 
b
g
-
w
h
i
t
e
/
7
0
 
d
a
r
k
:
b
g
-
[
#
0
7
0
7
0
7
]
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
 
p
-
6
 
s
h
a
d
o
w
-
s
m
 
h
o
v
e
r
:
b
o
r
d
e
r
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
4
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
/
4
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
[
0
_
0
_
1
6
p
x
_
r
g
b
a
(
1
6
3
,
2
3
0
,
5
3
,
0
.
0
5
)
]
 
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
2
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
g
 
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
h
2
 
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
l
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
"
>
R
e
p
o
r
t
 
a
n
 
I
s
s
u
e
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
m
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
t
e
x
t
-
g
r
a
y
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
g
r
a
y
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
F
o
u
n
d
 
a
 
b
u
g
 
o
r
 
s
e
c
u
r
i
t
y
 
v
u
l
n
e
r
a
b
i
l
i
t
y
?
 
P
l
e
a
s
e
 
e
m
a
i
l
 
u
s
 
a
t
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
"
m
a
i
l
t
o
:
m
r
s
a
c
h
i
n
c
h
a
u
r
a
s
i
y
a
@
g
m
a
i
l
.
c
o
m
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
l
i
m
e
-
4
0
0
 
h
o
v
e
r
:
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
r
s
a
c
h
i
n
c
h
a
u
r
a
s
i
y
a
@
g
m
a
i
l
.
c
o
m


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
t
h
 
d
e
t
a
i
l
s
 
a
n
d
 
s
t
e
p
s
 
t
o
 
r
e
p
r
o
d
u
c
e
.
 
W
e
 
t
a
k
e
 
a
l
l
 
r
e
p
o
r
t
s
 
s
e
r
i
o
u
s
l
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
d
 
w
i
l
l
 
i
n
v
e
s
t
i
g
a
t
e
 
p
r
o
m
p
t
l
y
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
o
c
i
a
l
 
M
e
d
i
a
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
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
r
o
u
n
d
e
d
-
2
x
l
 
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
g
r
a
y
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
g
r
a
y
-
9
0
0
 
b
g
-
w
h
i
t
e
/
7
0
 
d
a
r
k
:
b
g
-
[
#
0
7
0
7
0
7
]
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
 
p
-
6
 
s
h
a
d
o
w
-
s
m
 
h
o
v
e
r
:
b
o
r
d
e
r
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
4
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
/
4
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
[
0
_
0
_
1
6
p
x
_
r
g
b
a
(
1
6
3
,
2
3
0
,
5
3
,
0
.
0
5
)
]
 
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
2
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
l
o
b
e
 
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
h
2
 
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
l
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
"
>
S
o
c
i
a
l
 
M
e
d
i
a
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
u
l
 
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
s
p
a
c
e
-
y
-
3
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
"
h
t
t
p
s
:
/
/
x
.
c
o
m
/
i
n
t
e
r
n
h
a
c
k
_
x
y
z
"
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
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
l
i
m
e
-
4
0
0
 
h
o
v
e
r
:
u
n
d
e
r
l
i
n
e
"
>
T
w
i
t
t
e
r
 
/
 
X
,
 
@
i
n
t
e
r
n
h
a
c
k
_
x
y
z
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
"
h
t
t
p
s
:
/
/
w
w
w
.
l
i
n
k
e
d
i
n
.
c
o
m
/
c
o
m
p
a
n
y
/
i
n
t
e
r
n
h
a
c
k
"
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
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
l
i
m
e
-
4
0
0
 
h
o
v
e
r
:
u
n
d
e
r
l
i
n
e
"
>
L
i
n
k
e
d
I
n
,
 
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
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
S
o
c
i
a
l
 
A
c
t
i
o
n
 
B
u
t
t
o
n
s
 
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
m
t
-
1
0
 
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
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
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
"
h
t
t
p
s
:
/
/
x
.
c
o
m
/
i
n
t
e
r
n
h
a
c
k
_
x
y
z
"
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
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
p
x
-
5
 
p
y
-
3
 
r
o
u
n
d
e
d
-
2
x
l
 
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
g
r
a
y
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
g
r
a
y
-
9
0
0
 
b
g
-
w
h
i
t
e
/
7
0
 
d
a
r
k
:
b
g
-
[
#
0
7
0
7
0
7
]
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
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
l
i
m
e
-
4
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
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
4
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
/
4
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
[
0
_
0
_
1
6
p
x
_
r
g
b
a
(
1
6
3
,
2
3
0
,
5
3
,
0
.
0
5
)
]
 
h
o
v
e
r
:
b
g
-
l
i
m
e
-
5
0
0
/
5
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
T
w
i
t
t
e
r
 
/
 
X


 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
"
h
t
t
p
s
:
/
/
w
w
w
.
l
i
n
k
e
d
i
n
.
c
o
m
/
c
o
m
p
a
n
y
/
i
n
t
e
r
n
h
a
c
k
"
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
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
p
x
-
5
 
p
y
-
3
 
r
o
u
n
d
e
d
-
2
x
l
 
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
g
r
a
y
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
g
r
a
y
-
9
0
0
 
b
g
-
w
h
i
t
e
/
7
0
 
d
a
r
k
:
b
g
-
[
#
0
7
0
7
0
7
]
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
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
l
i
m
e
-
4
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
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
4
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
/
4
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
[
0
_
0
_
1
6
p
x
_
r
g
b
a
(
1
6
3
,
2
3
0
,
5
3
,
0
.
0
5
)
]
 
h
o
v
e
r
:
b
g
-
l
i
m
e
-
5
0
0
/
5
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
L
i
n
k
e
d
I
n


 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
"
m
a
i
l
t
o
:
m
r
s
a
c
h
i
n
c
h
a
u
r
a
s
i
y
a
@
g
m
a
i
l
.
c
o
m
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
p
x
-
5
 
p
y
-
3
 
r
o
u
n
d
e
d
-
2
x
l
 
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
g
r
a
y
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
g
r
a
y
-
9
0
0
 
b
g
-
w
h
i
t
e
/
7
0
 
d
a
r
k
:
b
g
-
[
#
0
7
0
7
0
7
]
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
s
m
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
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
l
i
m
e
-
4
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
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
4
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
/
4
0
 
h
o
v
e
r
:
s
h
a
d
o
w
-
[
0
_
0
_
1
6
p
x
_
r
g
b
a
(
1
6
3
,
2
3
0
,
5
3
,
0
.
0
5
)
]
 
h
o
v
e
r
:
b
g
-
l
i
m
e
-
5
0
0
/
5
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
E
m
a
i
l
 
S
u
p
p
o
r
t


 
 
 
 
 
 
 
 
 
 
<
/
a
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
a
i
n
>




 
 
 
 
 
 
<
F
o
o
t
e
r
 
/
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


