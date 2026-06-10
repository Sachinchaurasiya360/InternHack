
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
,
 
u
s
e
Q
u
e
r
y
C
l
i
e
n
t
 
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
 
L
i
n
k
 
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
-
r
o
u
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


 
 
M
a
p
P
i
n
,


 
 
G
r
a
d
u
a
t
i
o
n
C
a
p
,


 
 
L
i
n
k
e
d
i
n
,


 
 
G
i
t
h
u
b
,


 
 
G
l
o
b
e
,


 
 
F
i
l
e
T
e
x
t
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


 
 
M
a
i
l
,


 
 
E
y
e
,


 
 
B
o
o
k
m
a
r
k
,


 
 
B
o
o
k
m
a
r
k
C
h
e
c
k
,


 
 
S
h
i
e
l
d
C
h
e
c
k
,


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
,
 
{
 
S
E
R
V
E
R
_
U
R
L
 
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


i
m
p
o
r
t
 
{
 
q
u
e
r
y
K
e
y
s
 
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
.
.
/
l
i
b
/
q
u
e
r
y
-
k
e
y
s
"
;




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
T
a
l
e
n
t
R
e
s
u
l
t
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
e
m
a
i
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
f
i
l
e
P
i
c
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
b
i
o
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
c
o
l
l
e
g
e
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
g
r
a
d
u
a
t
i
o
n
Y
e
a
r
:
 
n
u
m
b
e
r
 
|
 
n
u
l
l
;


 
 
s
k
i
l
l
s
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


 
 
l
o
c
a
t
i
o
n
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
l
i
n
k
e
d
i
n
U
r
l
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
g
i
t
h
u
b
U
r
l
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
p
o
r
t
f
o
l
i
o
U
r
l
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
r
e
s
u
m
e
s
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


 
 
j
o
b
S
t
a
t
u
s
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
b
e
s
t
A
t
s
S
c
o
r
e
:
 
n
u
m
b
e
r
 
|
 
n
u
l
l
;


 
 
v
e
r
i
f
i
e
d
S
k
i
l
l
C
o
u
n
t
:
 
n
u
m
b
e
r
;


 
 
v
e
r
i
f
i
e
d
S
k
i
l
l
s
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


}




f
u
n
c
t
i
o
n
 
g
e
t
I
n
i
t
i
a
l
s
(
n
a
m
e
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
r
e
t
u
r
n
 
n
a
m
e


 
 
 
 
.
s
p
l
i
t
(
"
 
"
)


 
 
 
 
.
m
a
p
(
(
p
a
r
t
)
 
=
>
 
p
a
r
t
[
0
]
)


 
 
 
 
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)


 
 
 
 
.
s
l
i
c
e
(
0
,
 
2
)


 
 
 
 
.
j
o
i
n
(
"
"
)


 
 
 
 
.
t
o
U
p
p
e
r
C
a
s
e
(
)
;


}




f
u
n
c
t
i
o
n
 
g
e
t
A
t
s
A
c
c
e
n
t
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
:
 
s
t
r
i
n
g
 
{


 
 
i
f
 
(
s
c
o
r
e
 
>
=
 
8
0
)
 
r
e
t
u
r
n
 
"
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
5
0
/
3
0
"
;


 
 
i
f
 
(
s
c
o
r
e
 
>
=
 
6
0
)
 
r
e
t
u
r
n
 
"
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
5
0
/
3
0
"
;


 
 
r
e
t
u
r
n
 
"
t
e
x
t
-
r
e
d
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
r
e
d
-
4
0
0
 
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
5
0
/
3
0
"
;


}




f
u
n
c
t
i
o
n
 
g
e
t
J
o
b
S
t
a
t
u
s
D
o
t
(
s
t
a
t
u
s
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
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
)
 
{


 
 
i
f
 
(
!
s
t
a
t
u
s
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
c
o
n
s
t
 
m
a
p
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
 
{
 
l
a
b
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
 
d
o
t
:
 
s
t
r
i
n
g
 
}
>
 
=
 
{


 
 
 
 
L
O
O
K
I
N
G
:
 
{
 
l
a
b
e
l
:
 
"
A
c
t
i
v
e
l
y
 
l
o
o
k
i
n
g
"
,
 
d
o
t
:
 
"
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
0
"
 
}
,


 
 
 
 
O
P
E
N
_
T
O
_
O
F
F
E
R
:
 
{
 
l
a
b
e
l
:
 
"
O
p
e
n
 
t
o
 
o
f
f
e
r
s
"
,
 
d
o
t
:
 
"
b
g
-
b
l
u
e
-
5
0
0
"
 
}
,


 
 
 
 
N
O
_
O
F
F
E
R
:
 
{
 
l
a
b
e
l
:
 
"
N
o
t
 
l
o
o
k
i
n
g
"
,
 
d
o
t
:
 
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
4
0
0
"
 
}
,


 
 
}
;


 
 
c
o
n
s
t
 
i
n
f
o
 
=
 
m
a
p
[
s
t
a
t
u
s
]
;


 
 
i
f
 
(
!
i
n
f
o
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
r
e
t
u
r
n
 
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
h
-
1
.
5
 
w
-
1
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
f
u
l
l
 
$
{
i
n
f
o
.
d
o
t
}
`
}
 
/
>


 
 
 
 
 
 
{
i
n
f
o
.
l
a
b
e
l
}


 
 
 
 
<
/
s
p
a
n
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
g
e
t
R
e
s
u
m
e
U
r
l
(
u
r
l
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
r
e
t
u
r
n
 
u
r
l
.
s
t
a
r
t
s
W
i
t
h
(
"
h
t
t
p
"
)
 
?
 
u
r
l
 
:
 
`
$
{
S
E
R
V
E
R
_
U
R
L
}
$
{
u
r
l
}
`
;


}




i
n
t
e
r
f
a
c
e
 
T
a
l
e
n
t
C
a
r
d
P
r
o
p
s
 
{


 
 
s
t
u
d
e
n
t
:
 
T
a
l
e
n
t
R
e
s
u
l
t
;


 
 
i
n
d
e
x
?
:
 
n
u
m
b
e
r
;


 
 
s
a
v
e
d
?
:
 
b
o
o
l
e
a
n
;


}




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
 
T
a
l
e
n
t
C
a
r
d
(
{
 
s
t
u
d
e
n
t
,
 
i
n
d
e
x
 
=
 
0
,
 
s
a
v
e
d
 
=
 
f
a
l
s
e
 
}
:
 
T
a
l
e
n
t
C
a
r
d
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
 
h
a
s
R
e
s
u
m
e
 
=
 
s
t
u
d
e
n
t
.
r
e
s
u
m
e
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
;


 
 
c
o
n
s
t
 
q
u
e
r
y
C
l
i
e
n
t
 
=
 
u
s
e
Q
u
e
r
y
C
l
i
e
n
t
(
)
;




 
 
c
o
n
s
t
 
t
o
g
g
l
e
S
a
v
e
 
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
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
s
a
v
e
d
)
 
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
d
e
l
e
t
e
(
`
/
r
e
c
r
u
i
t
e
r
/
s
a
v
e
d
-
c
a
n
d
i
d
a
t
e
s
/
$
{
s
t
u
d
e
n
t
.
i
d
}
`
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
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
`
/
r
e
c
r
u
i
t
e
r
/
s
a
v
e
d
-
c
a
n
d
i
d
a
t
e
s
/
$
{
s
t
u
d
e
n
t
.
i
d
}
`
,
 
{
}
)
;


 
 
 
 
 
 
}


 
 
 
 
}
,


 
 
 
 
o
n
M
u
t
a
t
e
:
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
 
 
a
w
a
i
t
 
q
u
e
r
y
C
l
i
e
n
t
.
c
a
n
c
e
l
Q
u
e
r
i
e
s
(
{
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
s
a
v
e
d
C
a
n
d
i
d
a
t
e
s
.
i
d
s
(
)
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
p
r
e
v
 
=
 
q
u
e
r
y
C
l
i
e
n
t
.
g
e
t
Q
u
e
r
y
D
a
t
a
<
n
u
m
b
e
r
[
]
>
(
q
u
e
r
y
K
e
y
s
.
s
a
v
e
d
C
a
n
d
i
d
a
t
e
s
.
i
d
s
(
)
)
 
?
?
 
[
]
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
 
s
a
v
e
d
 
?
 
p
r
e
v
.
f
i
l
t
e
r
(
(
i
d
)
 
=
>
 
i
d
 
!
=
=
 
s
t
u
d
e
n
t
.
i
d
)
 
:
 
[
.
.
.
p
r
e
v
,
 
s
t
u
d
e
n
t
.
i
d
]
;


 
 
 
 
 
 
q
u
e
r
y
C
l
i
e
n
t
.
s
e
t
Q
u
e
r
y
D
a
t
a
(
q
u
e
r
y
K
e
y
s
.
s
a
v
e
d
C
a
n
d
i
d
a
t
e
s
.
i
d
s
(
)
,
 
n
e
x
t
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
p
r
e
v
 
}
;


 
 
 
 
}
,


 
 
 
 
o
n
E
r
r
o
r
:
 
(
_
e
r
r
,
 
_
v
a
r
s
,
 
c
t
x
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
c
t
x
?
.
p
r
e
v
)
 
q
u
e
r
y
C
l
i
e
n
t
.
s
e
t
Q
u
e
r
y
D
a
t
a
(
q
u
e
r
y
K
e
y
s
.
s
a
v
e
d
C
a
n
d
i
d
a
t
e
s
.
i
d
s
(
)
,
 
c
t
x
.
p
r
e
v
)
;


 
 
 
 
}
,


 
 
 
 
o
n
S
e
t
t
l
e
d
:
 
(
)
 
=
>
 
{


 
 
 
 
 
 
q
u
e
r
y
C
l
i
e
n
t
.
i
n
v
a
l
i
d
a
t
e
Q
u
e
r
i
e
s
(
{
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
s
a
v
e
d
C
a
n
d
i
d
a
t
e
s
.
i
d
s
(
)
 
}
)
;


 
 
 
 
 
 
q
u
e
r
y
C
l
i
e
n
t
.
i
n
v
a
l
i
d
a
t
e
Q
u
e
r
i
e
s
(
{
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
s
a
v
e
d
C
a
n
d
i
d
a
t
e
s
.
l
i
s
t
(
)
 
}
)
;


 
 
 
 
}
,


 
 
}
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
 
1
2
 
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
e
l
a
y
:
 
i
n
d
e
x
 
*
 
0
.
0
3
,
 
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
5
 
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
g
r
o
u
p
 
r
e
l
a
t
i
v
e
 
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
5
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
5
 
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
s
t
o
n
e
-
4
0
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
w
h
i
t
e
/
3
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


 
 
 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
:
 
A
v
a
t
a
r
 
+
 
N
a
m
e
 
+
 
S
a
v
e
 
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
s
t
a
r
t
 
g
a
p
-
3
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
{
s
t
u
d
e
n
t
.
p
r
o
f
i
l
e
P
i
c
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
i
m
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
s
t
u
d
e
n
t
.
p
r
o
f
i
l
e
P
i
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
s
t
u
d
e
n
t
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
a
d
i
n
g
=
"
l
a
z
y
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
1
1
 
h
-
1
1
 
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
b
j
e
c
t
-
c
o
v
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
E
r
r
o
r
=
{
(
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
.
c
u
r
r
e
n
t
T
a
r
g
e
t
.
s
t
y
l
e
.
d
i
s
p
l
a
y
 
=
 
"
n
o
n
e
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
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
w
-
1
1
 
h
-
1
1
 
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
m
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
e
t
I
n
i
t
i
a
l
s
(
s
t
u
d
e
n
t
.
n
a
m
e
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
i
n
-
w
-
0
 
f
l
e
x
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
/
r
e
c
r
u
i
t
e
r
s
/
p
r
o
f
i
l
e
/
$
{
s
t
u
d
e
n
t
.
i
d
}
`
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
n
o
-
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
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
b
o
l
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
 
t
r
u
n
c
a
t
e
 
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
6
0
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
u
d
e
n
t
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
u
d
e
n
t
.
c
o
l
l
e
g
e
 
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
m
t
-
0
.
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
r
a
d
u
a
t
i
o
n
C
a
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
w
-
3
 
h
-
3
 
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
s
t
u
d
e
n
t
.
c
o
l
l
e
g
e
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
u
d
e
n
t
.
g
r
a
d
u
a
t
i
o
n
Y
e
a
r
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
&
m
i
d
d
o
t
;
 
{
s
t
u
d
e
n
t
.
g
r
a
d
u
a
t
i
o
n
Y
e
a
r
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
p
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
u
d
e
n
t
.
l
o
c
a
t
i
o
n
 
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
m
t
-
0
.
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
p
P
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
w
-
3
 
h
-
3
 
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
s
t
u
d
e
n
t
.
l
o
c
a
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
 
t
o
g
g
l
e
S
a
v
e
.
m
u
t
a
t
e
(
)
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
t
o
g
g
l
e
S
a
v
e
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
}


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
s
a
v
e
d
 
?
 
"
R
e
m
o
v
e
 
f
r
o
m
 
s
a
v
e
d
"
 
:
 
"
S
a
v
e
 
c
a
n
d
i
d
a
t
e
"
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
s
h
r
i
n
k
-
0
 
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
 
p
-
1
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
m
d
 
b
o
r
d
e
r
 
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
6
0
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
a
v
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
b
g
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
5
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
9
0
0
 
b
o
r
d
e
r
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


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
a
v
e
d
 
?
 
<
B
o
o
k
m
a
r
k
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
4
 
h
-
4
"
 
/
>
 
:
 
<
B
o
o
k
m
a
r
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
4
 
h
-
4
"
 
/
>
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
t
a
t
u
s
 
+
 
A
T
S
 
r
o
w
 
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
3
 
g
a
p
-
y
-
2
 
m
b
-
4
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
{
g
e
t
J
o
b
S
t
a
t
u
s
D
o
t
(
s
t
u
d
e
n
t
.
j
o
b
S
t
a
t
u
s
)
}


 
 
 
 
 
 
 
 
 
 
{
s
t
u
d
e
n
t
.
b
e
s
t
A
t
s
S
c
o
r
e
 
!
=
=
 
n
u
l
l
 
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
{
`
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
 
p
x
-
1
.
5
 
p
y
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
s
m
 
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
 
$
{
g
e
t
A
t
s
A
c
c
e
n
t
(
s
t
u
d
e
n
t
.
b
e
s
t
A
t
s
S
c
o
r
e
)
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
T
S
 
{
s
t
u
d
e
n
t
.
b
e
s
t
A
t
s
S
c
o
r
e
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


 
 
 
 
 
 
 
 
 
 
{
s
t
u
d
e
n
t
.
v
e
r
i
f
i
e
d
S
k
i
l
l
C
o
u
n
t
 
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
e
m
e
r
a
l
d
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
S
h
i
e
l
d
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
u
d
e
n
t
.
v
e
r
i
f
i
e
d
S
k
i
l
l
C
o
u
n
t
}
 
v
e
r
i
f
i
e
d


 
 
 
 
 
 
 
 
 
 
 
 
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
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
B
i
o
 
*
/
}


 
 
 
 
 
 
 
 
{
s
t
u
d
e
n
t
.
b
i
o
 
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
 
m
b
-
4
 
l
i
n
e
-
c
l
a
m
p
-
2
 
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
s
t
u
d
e
n
t
.
b
i
o
}


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
S
k
i
l
l
s
 
*
/
}


 
 
 
 
 
 
 
 
{
s
t
u
d
e
n
t
.
s
k
i
l
l
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
w
r
a
p
 
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
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
u
d
e
n
t
.
s
k
i
l
l
s
.
s
l
i
c
e
(
0
,
 
6
)
.
m
a
p
(
(
s
k
i
l
l
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
V
e
r
i
f
i
e
d
 
=
 
s
t
u
d
e
n
t
.
v
e
r
i
f
i
e
d
S
k
i
l
l
s
.
i
n
c
l
u
d
e
s
(
s
k
i
l
l
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
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
k
i
l
l
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
 
p
x
-
1
.
5
 
p
y
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
V
e
r
i
f
i
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
7
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
e
m
e
r
a
l
d
-
9
5
0
/
3
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
1
0
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
V
e
r
i
f
i
e
d
 
&
&
 
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
w
-
3
 
h
-
3
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
k
i
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
u
d
e
n
t
.
s
k
i
l
l
s
.
l
e
n
g
t
h
 
>
 
6
 
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
 
p
x
-
1
 
p
y
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
+
{
s
t
u
d
e
n
t
.
s
k
i
l
l
s
.
l
e
n
g
t
h
 
-
 
6
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
d
i
v
>


 
 
 
 
 
 
 
 
)
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
-
1
"
 
/
>




 
 
 
 
 
 
 
 
{
/
*
 
F
o
o
t
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
 
p
t
-
4
 
b
o
r
d
e
r
-
t
 
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
1
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
5
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
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
`
m
a
i
l
t
o
:
$
{
s
t
u
d
e
n
t
.
e
m
a
i
l
}
`
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
p
-
1
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
1
0
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
`
E
m
a
i
l
 
$
{
s
t
u
d
e
n
t
.
n
a
m
e
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
u
d
e
n
t
.
l
i
n
k
e
d
i
n
U
r
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
s
t
u
d
e
n
t
.
l
i
n
k
e
d
i
n
U
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
-
1
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
b
l
u
e
-
6
0
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
L
i
n
k
e
d
I
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
e
d
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
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
u
d
e
n
t
.
g
i
t
h
u
b
U
r
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
s
t
u
d
e
n
t
.
g
i
t
h
u
b
U
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
-
1
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
1
0
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
G
i
t
H
u
b
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
i
t
h
u
b
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
u
d
e
n
t
.
p
o
r
t
f
o
l
i
o
U
r
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
s
t
u
d
e
n
t
.
p
o
r
t
f
o
l
i
o
U
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
-
1
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
1
0
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
P
o
r
t
f
o
l
i
o
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
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
/
r
e
c
r
u
i
t
e
r
s
/
p
r
o
f
i
l
e
/
$
{
s
t
u
d
e
n
t
.
i
d
}
`
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
 
p
x
-
2
.
5
 
p
y
-
1
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
1
0
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
9
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
 
n
o
-
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
y
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
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
V
i
e
w


 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
h
a
s
R
e
s
u
m
e
 
?
 
g
e
t
R
e
s
u
m
e
U
r
l
(
s
t
u
d
e
n
t
.
r
e
s
u
m
e
s
[
0
]
!
)
 
:
 
u
n
d
e
f
i
n
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
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
s
e
m
i
b
o
l
d
 
p
x
-
2
.
5
 
p
y
-
1
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
m
d
 
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
 
n
o
-
u
n
d
e
r
l
i
n
e
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
a
s
R
e
s
u
m
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
9
0
0
 
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
s
t
o
n
e
-
8
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
9
0
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
2
0
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
1
0
0
 
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
6
0
0
 
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
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
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
h
a
s
R
e
s
u
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
l
e
T
e
x
t
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
s
u
m
e


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
<
/
>


 
 
)
;


}


