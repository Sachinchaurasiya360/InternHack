
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
P
a
r
a
m
s
,
 
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
 
u
s
e
Q
u
e
r
y
 
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
 
M
a
p
P
i
n
,
 
I
n
d
i
a
n
R
u
p
e
e
,
 
C
l
o
c
k
,
 
A
r
r
o
w
L
e
f
t
,
 
B
r
i
e
f
c
a
s
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
 
c
a
n
o
n
i
c
a
l
U
r
l
 
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
s
e
o
.
u
t
i
l
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
 
b
r
e
a
d
c
r
u
m
b
S
c
h
e
m
a
 
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
s
t
r
u
c
t
u
r
e
d
-
d
a
t
a
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
 
t
y
p
e
 
{
 
J
o
b
 
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
t
y
p
e
s
"
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
 
L
a
n
d
i
n
g
M
e
t
a
 
{


 
 
t
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
:
 
s
t
r
i
n
g
;


 
 
t
o
t
a
l
J
o
b
s
:
 
n
u
m
b
e
r
;


 
 
t
a
g
:
 
s
t
r
i
n
g
;


 
 
l
o
c
a
t
i
o
n
?
:
 
s
t
r
i
n
g
;


 
 
s
l
u
g
:
 
s
t
r
i
n
g
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
 
L
a
n
d
i
n
g
D
a
t
a
 
{


 
 
j
o
b
s
:
 
J
o
b
[
]
;


 
 
m
e
t
a
:
 
L
a
n
d
i
n
g
M
e
t
a
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
 
J
o
b
L
a
n
d
i
n
g
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
 
{
 
s
l
u
g
 
}
 
=
 
u
s
e
P
a
r
a
m
s
(
)
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
,
 
i
s
L
o
a
d
i
n
g
 
}
 
=
 
u
s
e
Q
u
e
r
y
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
 
[
"
j
o
b
-
l
a
n
d
i
n
g
"
,
 
s
l
u
g
]
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>


 
 
 
 
 
 
a
p
i
.
g
e
t
(
`
/
j
o
b
s
/
l
a
n
d
i
n
g
/
$
{
s
l
u
g
}
`
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
 
a
s
 
L
a
n
d
i
n
g
D
a
t
a
)
,


 
 
 
 
e
n
a
b
l
e
d
:
 
!
!
s
l
u
g
,


 
 
}
)
;




 
 
c
o
n
s
t
 
j
o
b
s
 
=
 
d
a
t
a
?
.
j
o
b
s
 
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
 
m
e
t
a
 
=
 
d
a
t
a
?
.
m
e
t
a
;




 
 
/
/
 
S
p
l
i
t
 
t
h
e
 
t
i
t
l
e
 
s
o
 
w
e
 
c
a
n
 
a
n
i
m
a
t
e
 
o
n
l
y
 
t
h
e
 
f
i
n
a
l
 
w
o
r
d
 
(
A
c
c
e
p
t
a
n
c
e
 
C
r
i
t
e
r
i
a
 
#
2
)


 
 
c
o
n
s
t
 
t
i
t
l
e
T
e
x
t
 
=
 
(
m
e
t
a
?
.
t
i
t
l
e
 
?
?
 
"
F
i
n
d
 
y
o
u
r
 
n
e
x
t
 
r
o
l
e
.
"
)
.
t
r
i
m
(
)
;


 
 
c
o
n
s
t
 
w
o
r
d
s
 
=
 
t
i
t
l
e
T
e
x
t
 
?
 
t
i
t
l
e
T
e
x
t
.
s
p
l
i
t
(
/
\
s
+
/
)
 
:
 
[
"
F
i
n
d
"
,
 
"
y
o
u
r
"
,
 
"
n
e
x
t
"
,
 
"
r
o
l
e
.
"
]
;


 
 
c
o
n
s
t
 
l
a
s
t
W
o
r
d
 
=
 
w
o
r
d
s
.
p
o
p
(
)
 
?
?
 
"
r
o
l
e
.
"
;


 
 
c
o
n
s
t
 
r
e
s
t
O
f
T
i
t
l
e
 
=
 
w
o
r
d
s
.
j
o
i
n
(
"
 
"
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
 
b
g
-
[
#
f
a
f
a
f
a
]
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
5
0
"
>


 
 
 
 
 
 
{
m
e
t
a
 
&
&
 
(


 
 
 
 
 
 
 
 
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
{
m
e
t
a
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
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
{
m
e
t
a
.
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
}


 
 
 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
{
`
$
{
m
e
t
a
.
t
a
g
.
t
o
L
o
w
e
r
C
a
s
e
(
)
}
 
j
o
b
s
,
 
$
{
m
e
t
a
.
l
o
c
a
t
i
o
n
?
.
t
o
L
o
w
e
r
C
a
s
e
(
)
 
|
|
 
"
"
}
 
i
n
t
e
r
n
s
h
i
p
s
,
 
$
{
m
e
t
a
.
t
a
g
.
t
o
L
o
w
e
r
C
a
s
e
(
)
}
 
c
a
r
e
e
r
s
`
}


 
 
 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
`
/
j
o
b
s
/
t
/
$
{
s
l
u
g
}
`
)
}


 
 
 
 
 
 
 
 
 
 
s
t
r
u
c
t
u
r
e
d
D
a
t
a
=
{
b
r
e
a
d
c
r
u
m
b
S
c
h
e
m
a
(
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
J
o
b
s
"
,
 
u
r
l
:
 
c
a
n
o
n
i
c
a
l
U
r
l
(
"
/
j
o
b
s
"
)
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
a
m
e
:
 
m
e
t
a
.
t
i
t
l
e
,
 
u
r
l
:
 
c
a
n
o
n
i
c
a
l
U
r
l
(
`
/
j
o
b
s
/
t
/
$
{
s
l
u
g
}
`
)
 
}
,


 
 
 
 
 
 
 
 
 
 
]
)
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
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
4
 
p
b
-
1
6
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
"
/
j
o
b
s
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
1
.
5
 
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
g
r
a
y
-
7
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
g
r
a
y
-
2
0
0
 
m
b
-
6
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
L
e
f
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
4
 
h
-
4
"
 
/
>
 
A
l
l
 
J
o
b
s


 
 
 
 
 
 
 
 
<
/
L
i
n
k
>




 
 
 
 
 
 
 
 
{
/
*
 
S
t
a
n
d
a
r
d
i
z
e
d
 
H
e
a
d
i
n
g
 
*
/
}


 
 
 
 
 
 
 
 
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
m
t
-
4
 
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
{
r
e
s
t
O
f
T
i
t
l
e
 
&
&
 
`
$
{
r
e
s
t
O
f
T
i
t
l
e
}
 
`
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
 
a
l
i
g
n
-
b
a
s
e
l
i
n
e
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
{
l
a
s
t
W
o
r
d
}
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
4
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
0
.
5
 
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
2
.
5
 
s
m
:
h
-
3
 
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
4
0
0
 
m
b
-
8
 
m
t
-
4
"
>


 
 
 
 
 
 
 
 
 
 
{
m
e
t
a


 
 
 
 
 
 
 
 
 
 
 
 
?
 
`
$
{
m
e
t
a
.
t
o
t
a
l
J
o
b
s
}
 
o
p
e
n
 
p
o
s
i
t
i
o
n
$
{
m
e
t
a
.
t
o
t
a
l
J
o
b
s
 
!
=
=
 
1
 
?
 
"
s
"
 
:
 
"
"
}
`


 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
L
o
a
d
i
n
g
.
.
.
"
}


 
 
 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
 
 
{
i
s
L
o
a
d
i
n
g
 
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
y
-
2
0
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
 
b
o
r
d
e
r
-
2
 
b
o
r
d
e
r
-
i
n
d
i
g
o
-
5
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


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
!
i
s
L
o
a
d
i
n
g
 
&
&
 
j
o
b
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
y
-
2
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
r
i
e
f
c
a
s
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
1
2
 
h
-
1
2
 
m
x
-
a
u
t
o
 
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
6
0
0
 
m
b
-
4
"
 
/
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
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
j
o
b
s
 
f
o
u
n
d
 
f
o
r
 
t
h
i
s
 
f
i
l
t
e
r
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
"
/
j
o
b
s
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
i
n
d
i
g
o
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
i
n
d
i
g
o
-
4
0
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
r
o
w
s
e
 
a
l
l
 
j
o
b
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
s
p
a
c
e
-
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
{
j
o
b
s
.
m
a
p
(
(
j
o
b
,
 
i
)
 
=
>
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
j
o
b
.
i
d
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
 
*
 
0
.
0
4
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
j
o
b
s
/
$
{
j
o
b
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
b
l
o
c
k
 
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
g
r
a
y
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
8
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
 
p
-
5
 
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
s
h
a
d
o
w
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
l
g
 
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
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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
i
n
d
i
g
o
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
i
n
d
i
g
o
-
4
0
0
 
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
c
o
m
p
a
n
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
w
r
a
p
 
g
a
p
-
4
 
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
 
{
j
o
b
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
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
s
a
l
a
r
y
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
d
i
a
n
R
u
p
e
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
 
{
j
o
b
.
s
a
l
a
r
y
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
j
o
b
.
d
e
a
d
l
i
n
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
e
w
 
D
a
t
e
(
j
o
b
.
d
e
a
d
l
i
n
e
)
 
<
 
n
e
w
 
D
a
t
e
(
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
r
e
d
-
5
0
0
 
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
"
>
<
C
l
o
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
 
E
x
p
i
r
e
d
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
"
>
<
C
l
o
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
 
{
n
e
w
 
D
a
t
e
(
j
o
b
.
d
e
a
d
l
i
n
e
)
.
t
o
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
(
"
e
n
-
U
S
"
,
 
{
 
m
o
n
t
h
:
 
"
s
h
o
r
t
"
,
 
d
a
y
:
 
"
n
u
m
e
r
i
c
"
 
}
)
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
t
a
g
s
?
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
t
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
t
a
g
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
 
5
)
.
m
a
p
(
(
t
a
g
)
 
=
>
 
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
t
a
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
t
e
x
t
-
x
s
 
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
 
b
g
-
g
r
a
y
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
g
r
a
y
-
8
0
0
 
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
m
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
a
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
 
P
o
p
u
l
a
r
 
j
o
b
 
s
e
a
r
c
h
e
s
 
f
o
r
 
i
n
t
e
r
n
a
l
 
l
i
n
k
i
n
g
 
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
6
 
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
8
0
0
 
p
t
-
8
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
l
g
 
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
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
P
o
p
u
l
a
r
 
J
o
b
 
S
e
a
r
c
h
e
s


 
 
 
 
 
 
 
 
 
 
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
f
r
o
n
t
e
n
d
-
r
e
m
o
t
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
b
a
c
k
e
n
d
-
b
a
n
g
a
l
o
r
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
f
u
l
l
s
t
a
c
k
-
r
e
m
o
t
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
r
e
a
c
t
-
r
e
m
o
t
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
p
y
t
h
o
n
-
r
e
m
o
t
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
d
e
v
o
p
s
-
r
e
m
o
t
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
d
a
t
a
-
s
c
i
e
n
c
e
-
r
e
m
o
t
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
m
o
b
i
l
e
-
b
a
n
g
a
l
o
r
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
a
i
-
r
e
m
o
t
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
j
a
v
a
-
p
u
n
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
s
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
/
j
o
b
s
/
t
/
$
{
s
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
t
e
x
t
-
s
m
 
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
g
r
a
y
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
8
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
l
g
 
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
i
n
d
i
g
o
-
3
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
i
n
d
i
g
o
-
7
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
i
n
d
i
g
o
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
i
n
d
i
g
o
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
.
s
p
l
i
t
(
"
-
"
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
.
m
a
p
(
(
w
)
 
=
>
 
w
.
c
h
a
r
A
t
(
0
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
 
+
 
w
.
s
l
i
c
e
(
1
)
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
}
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
J
o
b
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
