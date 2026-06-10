
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
C
a
l
l
b
a
c
k
,
 
u
s
e
R
e
f
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
 
u
s
e
M
u
t
a
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
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
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
 
S
p
a
r
k
l
e
s
,
 
C
h
e
v
r
o
n
D
o
w
n
,
 
T
i
m
e
r
,
 
C
h
e
c
k
 
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




t
y
p
e
 
H
i
n
t
L
e
v
e
l
 
=
 
"
c
o
n
c
e
p
t
u
a
l
"
 
|
 
"
a
l
g
o
r
i
t
h
m
i
c
"
 
|
 
"
c
o
d
e
"
;




c
o
n
s
t
 
L
E
V
E
L
_
L
A
B
E
L
S
:
 
R
e
c
o
r
d
<
H
i
n
t
L
e
v
e
l
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
c
o
n
c
e
p
t
u
a
l
:
 
"
0
1
 
c
o
n
c
e
p
t
u
a
l
"
,


 
 
a
l
g
o
r
i
t
h
m
i
c
:
 
"
0
2
 
a
l
g
o
r
i
t
h
m
i
c
"
,


 
 
c
o
d
e
:
 
"
0
3
 
c
o
d
e
"
,


}
;




c
o
n
s
t
 
C
O
O
L
D
O
W
N
_
S
E
C
O
N
D
S
 
=
 
1
5
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
 
A
i
H
i
n
t
D
a
t
a
 
{


 
 
h
i
n
t
:
 
s
t
r
i
n
g
;


 
 
l
e
v
e
l
:
 
s
t
r
i
n
g
;


 
 
p
r
o
b
l
e
m
T
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
d
i
f
f
i
c
u
l
t
y
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
 
A
i
H
i
n
t
P
a
n
e
l
(
{
 
p
r
o
b
l
e
m
I
d
 
}
:
 
{
 
p
r
o
b
l
e
m
I
d
:
 
n
u
m
b
e
r
 
}
)
 
{


 
 
c
o
n
s
t
 
[
c
u
r
r
e
n
t
L
e
v
e
l
,
 
s
e
t
C
u
r
r
e
n
t
L
e
v
e
l
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
H
i
n
t
L
e
v
e
l
>
(
"
c
o
n
c
e
p
t
u
a
l
"
)
;


 
 
c
o
n
s
t
 
[
h
i
n
t
s
,
 
s
e
t
H
i
n
t
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
<
A
i
H
i
n
t
D
a
t
a
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
e
x
p
a
n
d
e
d
,
 
s
e
t
E
x
p
a
n
d
e
d
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
c
o
o
l
d
o
w
n
,
 
s
e
t
C
o
o
l
d
o
w
n
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
R
e
f
 
=
 
u
s
e
R
e
f
<
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
I
n
t
e
r
v
a
l
>
>
(
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
c
o
o
l
d
o
w
n
 
<
=
 
0
)
 
{


 
 
 
 
 
 
i
f
 
(
t
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
t
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
t
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
C
o
o
l
d
o
w
n
(
(
p
r
e
v
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
p
r
e
v
 
<
=
 
1
)
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
t
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
t
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
0
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
p
r
e
v
 
-
 
1
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
1
0
0
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
 
{
 
i
f
 
(
t
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
t
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
;
 
}
;


 
 
}
,
 
[
c
o
o
l
d
o
w
n
]
)
;




 
 
c
o
n
s
t
 
h
i
n
t
M
u
t
a
t
i
o
n
 
=
 
u
s
e
M
u
t
a
t
i
o
n
(
{


 
 
 
 
m
u
t
a
t
i
o
n
F
n
:
 
(
l
e
v
e
l
:
 
H
i
n
t
L
e
v
e
l
)
 
=
>


 
 
 
 
 
 
a
p
i
.
p
o
s
t
<
A
i
H
i
n
t
D
a
t
a
>
(
`
/
d
s
a
/
p
r
o
b
l
e
m
s
/
$
{
p
r
o
b
l
e
m
I
d
}
/
h
i
n
t
s
`
,
 
{
 
l
e
v
e
l
 
}
)
.
t
h
e
n
(
(
r
)
 
=
>
 
r
.
d
a
t
a
)
,


 
 
 
 
o
n
S
u
c
c
e
s
s
:
 
(
d
a
t
a
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
H
i
n
t
s
(
(
p
r
e
v
)
 
=
>
 
[
.
.
.
p
r
e
v
,
 
d
a
t
a
]
)
;


 
 
 
 
 
 
s
e
t
C
o
o
l
d
o
w
n
(
C
O
O
L
D
O
W
N
_
S
E
C
O
N
D
S
)
;


 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
L
e
v
e
l
:
 
R
e
c
o
r
d
<
H
i
n
t
L
e
v
e
l
,
 
H
i
n
t
L
e
v
e
l
 
|
 
n
u
l
l
>
 
=
 
{


 
 
 
 
 
 
 
 
c
o
n
c
e
p
t
u
a
l
:
 
"
a
l
g
o
r
i
t
h
m
i
c
"
,


 
 
 
 
 
 
 
 
a
l
g
o
r
i
t
h
m
i
c
:
 
"
c
o
d
e
"
,


 
 
 
 
 
 
 
 
c
o
d
e
:
 
n
u
l
l
,


 
 
 
 
 
 
}
;


 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
 
=
 
n
e
x
t
L
e
v
e
l
[
c
u
r
r
e
n
t
L
e
v
e
l
]
;


 
 
 
 
 
 
i
f
 
(
n
e
x
t
)
 
s
e
t
C
u
r
r
e
n
t
L
e
v
e
l
(
n
e
x
t
)
;


 
 
 
 
}
,


 
 
}
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
G
e
t
H
i
n
t
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
c
o
o
l
d
o
w
n
 
>
 
0
 
|
|
 
h
i
n
t
M
u
t
a
t
i
o
n
.
i
s
P
e
n
d
i
n
g
)
 
r
e
t
u
r
n
;


 
 
 
 
h
i
n
t
M
u
t
a
t
i
o
n
.
m
u
t
a
t
e
(
c
u
r
r
e
n
t
L
e
v
e
l
)
;


 
 
}
,
 
[
c
u
r
r
e
n
t
L
e
v
e
l
,
 
c
o
o
l
d
o
w
n
,
 
h
i
n
t
M
u
t
a
t
i
o
n
]
)
;




 
 
c
o
n
s
t
 
c
a
n
R
e
q
u
e
s
t
 
=
 
c
o
o
l
d
o
w
n
 
=
=
=
 
0
 
&
&
 
!
h
i
n
t
M
u
t
a
t
i
o
n
.
i
s
P
e
n
d
i
n
g
;


 
 
c
o
n
s
t
 
a
l
l
L
e
v
e
l
s
D
o
n
e
 
=
 
c
u
r
r
e
n
t
L
e
v
e
l
 
=
=
=
 
"
c
o
d
e
"
 
&
&
 
h
i
n
t
s
.
l
e
n
g
t
h
 
>
=
 
3
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
E
x
p
a
n
d
e
d
(
!
e
x
p
a
n
d
e
d
)
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
4
 
p
y
-
3
 
h
o
v
e
r
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
g
-
s
t
o
n
e
-
8
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
 
b
o
r
d
e
r
-
0
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
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


 
 
 
 
 
 
 
 
 
 
<
S
p
a
r
k
l
e
s
 
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
 
h
-
3
 
t
e
x
t
-
a
m
b
e
r
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
A
I
 
h
i
n
t
s


 
 
 
 
 
 
 
 
 
 
{
h
i
n
t
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
h
-
1
 
w
-
1
 
b
g
-
a
m
b
e
r
-
4
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
f
u
l
l
"
 
/
>


 
 
 
 
 
 
 
 
 
 
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
C
h
e
v
r
o
n
D
o
w
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
a
n
s
i
t
i
o
n
-
t
r
a
n
s
f
o
r
m
 
d
u
r
a
t
i
o
n
-
2
0
0
 
$
{
e
x
p
a
n
d
e
d
 
?
 
"
r
o
t
a
t
e
-
1
8
0
"
 
:
 
"
"
}
`
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
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
>


 
 
 
 
 
 
 
 
{
e
x
p
a
n
d
e
d
 
&
&
 
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
 
h
e
i
g
h
t
:
 
0
,
 
o
p
a
c
i
t
y
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
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
,
 
o
p
a
c
i
t
y
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
h
e
i
g
h
t
:
 
0
,
 
o
p
a
c
i
t
y
:
 
0
 
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
4
 
p
b
-
4
 
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
i
n
t
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
x
s
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
e
t
 
p
r
o
g
r
e
s
s
i
v
e
 
h
i
n
t
s
 
f
o
r
 
t
h
i
s
 
p
r
o
b
l
e
m
 
—
 
c
o
n
c
e
p
t
u
a
l
,
 
a
l
g
o
r
i
t
h
m
i
c
,
 
t
h
e
n
 
c
o
d
e
-
l
e
v
e
l
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
i
n
t
s
.
m
a
p
(
(
h
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
"
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
8
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
1
.
5
 
p
x
-
2
 
p
y
-
0
.
5
 
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
a
m
b
e
r
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
a
m
b
e
r
-
4
0
0
 
b
g
-
a
m
b
e
r
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
a
m
b
e
r
-
9
0
0
/
2
0
 
r
o
u
n
d
e
d
-
s
m
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
 
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
2
.
5
 
h
-
2
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
L
E
V
E
L
_
L
A
B
E
L
S
[
h
.
l
e
v
e
l
 
a
s
 
H
i
n
t
L
e
v
e
l
]
 
|
|
 
h
.
l
e
v
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
.
h
i
n
t
.
s
p
l
i
t
(
"
 
(
l
e
v
e
l
:
"
)
[
0
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
l
l
L
e
v
e
l
s
D
o
n
e
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
p
t
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
l
l
 
h
i
n
t
 
l
e
v
e
l
s
 
r
e
v
e
a
l
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
G
e
t
H
i
n
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
!
c
a
n
R
e
q
u
e
s
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
w
-
f
u
l
l
 
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
2
 
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
w
h
i
t
e
/
1
5
 
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
 
h
o
v
e
r
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
9
0
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
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
i
n
t
M
u
t
a
t
i
o
n
.
i
s
P
e
n
d
i
n
g
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
3
 
h
-
3
 
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
9
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
 
b
o
r
d
e
r
-
t
-
t
r
a
n
s
p
a
r
e
n
t
 
r
o
u
n
d
e
d
-
f
u
l
l
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
e
n
e
r
a
t
i
n
g
.
.
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
c
o
o
l
d
o
w
n
 
>
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
i
m
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
w
-
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
a
i
t
 
{
c
o
o
l
d
o
w
n
}
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
p
a
r
k
l
e
s
 
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
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
e
t
 
{
L
E
V
E
L
_
L
A
B
E
L
S
[
c
u
r
r
e
n
t
L
e
v
e
l
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
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
}


 
 
 
 
 
 
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


 
 
)
;


}


