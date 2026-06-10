
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
R
e
f
,
 
u
s
e
S
t
a
t
e
,
 
t
y
p
e
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
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
,
 
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
 
B
o
o
k
O
p
e
n
,
 
G
l
o
b
e
,
 
L
a
y
e
r
s
,
 
P
a
u
s
e
,
 
P
l
a
y
,
 
R
e
w
i
n
d
I
c
o
n
,
 
R
o
t
a
t
e
C
c
w
 
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
 
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
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
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
Q
u
i
z
Q
u
e
s
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
"
;




c
o
n
s
t
 
S
D
 
=
 
"
#
8
4
c
c
1
6
"
;


c
o
n
s
t
 
N
E
U
T
R
A
L
 
=
 
"
#
6
4
7
4
8
b
"
;


c
o
n
s
t
 
P
U
R
P
L
E
 
=
 
"
#
8
b
5
c
f
6
"
;


c
o
n
s
t
 
M
O
N
O
 
=
 
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
M
e
n
l
o
,
 
C
o
n
s
o
l
a
s
,
 
m
o
n
o
s
p
a
c
e
'
;




c
o
n
s
t
 
s
e
c
t
i
o
n
T
i
t
l
e
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,


 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
f
o
n
t
S
i
z
e
:
 
"
1
.
1
5
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,


 
 
m
a
r
g
i
n
:
 
"
0
 
0
 
1
2
p
x
"
,


}
;


c
o
n
s
t
 
s
e
c
t
i
o
n
D
e
s
c
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,


 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
2
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
m
a
r
g
i
n
:
 
"
0
 
0
 
2
0
p
x
"
,


 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
5
,


}
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
D
e
f
i
n
i
t
i
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




f
u
n
c
t
i
o
n
 
D
e
f
i
n
i
t
i
o
n
(
)
 
{


 
 
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
A
 
q
u
e
u
e
 
t
h
a
t
 
d
o
e
s
n
&
r
s
q
u
o
;
t
 
t
h
r
o
w
 
m
e
s
s
a
g
e
s
 
a
w
a
y
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
K
a
f
k
a
 
i
s
 
a
n
 
<
b
>
a
p
p
e
n
d
-
o
n
l
y
 
l
o
g
<
/
b
>
:
 
p
r
o
d
u
c
e
r
s
 
w
r
i
t
e
 
t
o
 
t
h
e
 
e
n
d
,
 
c
o
n
s
u
m
e
r
s
 
r
e
a
d
 
f
r
o
m
 
a
n
y


 
 
 
 
 
 
 
 
o
f
f
s
e
t
.
 
M
e
s
s
a
g
e
s
 
a
r
e
n
&
r
s
q
u
o
;
t
 
d
e
l
e
t
e
d
 
o
n
 
c
o
n
s
u
m
p
t
i
o
n
 
—
 
t
h
e
y
 
s
i
t
 
o
n
 
d
i
s
k
 
f
o
r
 
a
 
c
o
n
f
i
g
u
r
a
b
l
e


 
 
 
 
 
 
 
 
r
e
t
e
n
t
i
o
n
 
p
e
r
i
o
d
 
(
h
o
u
r
s
,
 
d
a
y
s
,
 
f
o
r
e
v
e
r
)
.
 
E
a
c
h
 
c
o
n
s
u
m
e
r
 
t
r
a
c
k
s
 
i
t
s
 
o
w
n
 
o
f
f
s
e
t
.


 
 
 
 
 
 
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
3
 
g
a
p
-
3
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
T
o
p
i
c
"
,
 
v
:
 
"
A
 
n
a
m
e
d
 
s
t
r
e
a
m
 
(
o
r
d
e
r
s
,
 
p
a
g
e
-
v
i
e
w
s
)
.
 
L
o
g
i
c
a
l
l
y
 
i
n
f
i
n
i
t
e
,
 
a
p
p
e
n
d
-
o
n
l
y
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
P
a
r
t
i
t
i
o
n
"
,
 
v
:
 
"
A
 
t
o
p
i
c
 
i
s
 
s
p
l
i
t
 
i
n
t
o
 
N
 
p
a
r
t
i
t
i
o
n
s
.
 
E
a
c
h
 
p
a
r
t
i
t
i
o
n
 
i
s
 
i
t
s
 
o
w
n
 
l
o
g
.
 
O
r
d
e
r
 
i
s
 
g
u
a
r
a
n
t
e
e
d
 
w
i
t
h
i
n
 
a
 
p
a
r
t
i
t
i
o
n
,
 
n
o
t
 
a
c
r
o
s
s
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
O
f
f
s
e
t
"
,
 
v
:
 
"
P
o
s
i
t
i
o
n
 
i
n
 
a
 
p
a
r
t
i
t
i
o
n
.
 
C
o
n
s
u
m
e
r
s
 
t
r
a
c
k
 
t
h
i
s
;
 
t
h
e
 
b
r
o
k
e
r
 
d
o
e
s
n
'
t
 
m
a
n
a
g
e
 
i
t
 
f
o
r
 
t
h
e
m
.
"
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
c
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
c
.
k
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
4
5
,
 
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
8
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
k
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
6
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>
{
c
.
v
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
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
6
p
x
 
1
8
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
5
5
`
,
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
S
D
}
1
0
`
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
6
 
}
}
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
H
E
 
B
I
G
 
I
D
E
A


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
B
e
c
a
u
s
e
 
m
e
s
s
a
g
e
s
 
a
r
e
n
&
r
s
q
u
o
;
t
 
c
o
n
s
u
m
e
d
-
a
n
d
-
d
e
s
t
r
o
y
e
d
,
 
K
a
f
k
a
 
i
s
 
b
o
t
h
 
a
 
q
u
e
u
e
 
A
N
D
 
a
 
d
a
t
a
b
a
s
e


 
 
 
 
 
 
 
 
 
 
o
f
 
r
e
c
e
n
t
 
h
i
s
t
o
r
y
.
 
R
e
p
l
a
y
 
a
 
b
u
g
g
y
 
c
o
n
s
u
m
e
r
 
f
r
o
m
 
y
e
s
t
e
r
d
a
y
&
r
s
q
u
o
;
s
 
o
f
f
s
e
t
.
 
A
d
d
 
a
 
b
r
a
n
d
-
n
e
w


 
 
 
 
 
 
 
 
 
 
a
n
a
l
y
t
i
c
s
 
s
e
r
v
i
c
e
 
t
h
a
t
 
r
e
a
d
s
 
t
h
e
 
l
a
s
t
 
7
 
d
a
y
s
.
 
T
w
o
 
c
o
n
s
u
m
e
r
 
g
r
o
u
p
s
 
r
e
a
d
 
i
n
 
p
a
r
a
l
l
e
l


 
 
 
 
 
 
 
 
 
 
w
i
t
h
o
u
t
 
a
f
f
e
c
t
i
n
g
 
e
a
c
h
 
o
t
h
e
r
.


 
 
 
 
 
 
 
 
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
d
i
v
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
}
}
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
R
E
A
L
 
E
X
A
M
P
L
E
S


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
6
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
7
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
b
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
b
>
 
b
u
i
l
t
 
i
t
;
 
r
u
n
s
 
t
r
i
l
l
i
o
n
s
 
o
f
 
m
e
s
s
a
g
e
s
/
d
a
y
.
 
<
b
>
U
b
e
r
<
/
b
>
 
u
s
e
s
 
i
t
 
f
o
r
 
t
r
i
p


 
 
 
 
 
 
 
 
 
 
e
v
e
n
t
s
,
 
s
u
r
g
e
 
p
r
i
c
i
n
g
,
 
f
r
a
u
d
.
 
<
b
>
N
e
t
f
l
i
x
<
/
b
>
 
f
o
r
 
c
l
i
c
k
s
t
r
e
a
m
 
a
n
d
 
m
e
t
r
i
c
s
.
 
<
b
>
C
o
n
f
l
u
e
n
t
<
/
b
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
i
s
 
t
h
e
 
m
a
n
a
g
e
d
 
o
f
f
e
r
i
n
g
.
 
O
p
e
n
-
s
o
u
r
c
e
 
e
q
u
i
v
a
l
e
n
t
s
:
 
<
b
>
R
e
d
p
a
n
d
a
<
/
b
>
,
 
<
b
>
P
u
l
s
a
r
<
/
b
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
(
s
l
i
g
h
t
l
y
 
d
i
f
f
e
r
e
n
t
 
m
o
d
e
l
)
.
 
T
h
e
 
p
a
t
t
e
r
n
 
i
s
 
t
h
e
 
s
t
a
n
d
a
r
d
 
l
o
g
-
b
a
s
e
d
-
s
t
r
e
a
m
i
n
g


 
 
 
 
 
 
 
 
 
 
i
n
t
e
r
v
i
e
w
 
a
n
s
w
e
r
.


 
 
 
 
 
 
 
 
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


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
A
n
i
m
a
t
e
d
 
p
a
r
t
i
t
i
o
n
e
d
 
l
o
g
 
+
 
2
 
c
o
n
s
u
m
e
r
 
g
r
o
u
p
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
T
O
P
I
C
_
L
E
N
 
=
 
1
6
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
o
g
M
s
g
 
{


 
 
o
f
f
s
e
t
:
 
n
u
m
b
e
r
;


 
 
p
a
y
l
o
a
d
:
 
s
t
r
i
n
g
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
 
P
a
r
t
i
t
i
o
n
e
d
L
o
g
(
)
 
{


 
 
c
o
n
s
t
 
[
l
o
g
,
 
s
e
t
L
o
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
L
o
g
M
s
g
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
g
r
o
u
p
A
,
 
s
e
t
G
r
o
u
p
A
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
 
[
g
r
o
u
p
B
,
 
s
e
t
G
r
o
u
p
B
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
 
[
r
u
n
n
i
n
g
,
 
s
e
t
R
u
n
n
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
t
r
u
e
)
;


 
 
c
o
n
s
t
 
i
d
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
(
0
)
;




 
 
/
/
 
A
p
p
e
n
d
 
m
e
s
s
a
g
e
s
 
o
n
 
a
 
t
i
c
k


 
 
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
r
u
n
n
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
L
o
g
(
(
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
 
o
f
f
s
e
t
 
=
 
i
d
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
+
+
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
 
[
.
.
.
l
,
 
{
 
o
f
f
s
e
t
,
 
p
a
y
l
o
a
d
:
 
p
a
y
l
o
a
d
F
o
r
(
o
f
f
s
e
t
)
 
}
]
;


 
 
 
 
 
 
 
 
i
f
 
(
n
e
x
t
.
l
e
n
g
t
h
 
>
 
T
O
P
I
C
_
L
E
N
)
 
r
e
t
u
r
n
 
n
e
x
t
.
s
l
i
c
e
(
n
e
x
t
.
l
e
n
g
t
h
 
-
 
T
O
P
I
C
_
L
E
N
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
x
t
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
1
3
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
h
a
n
d
l
e
)
;


 
 
}
,
 
[
r
u
n
n
i
n
g
]
)
;




 
 
/
/
 
G
r
o
u
p
 
A
 
c
o
n
s
u
m
e
s
 
f
a
s
t
e
r
 
t
h
a
n
 
B


 
 
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
r
u
n
n
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


 
 
 
 
 
 
c
o
n
s
t
 
h
e
a
d
 
=
 
l
o
g
.
l
e
n
g
t
h
 
>
 
0
 
?
 
l
o
g
[
l
o
g
.
l
e
n
g
t
h
 
-
 
1
]
.
o
f
f
s
e
t
 
:
 
-
1
;


 
 
 
 
 
 
s
e
t
G
r
o
u
p
A
(
(
g
)
 
=
>
 
(
g
 
<
=
 
h
e
a
d
 
?
 
g
 
+
 
1
 
:
 
g
)
)
;


 
 
 
 
}
,
 
1
1
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
h
a
n
d
l
e
)
;


 
 
}
,
 
[
r
u
n
n
i
n
g
,
 
l
o
g
]
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
r
u
n
n
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


 
 
 
 
 
 
c
o
n
s
t
 
h
e
a
d
 
=
 
l
o
g
.
l
e
n
g
t
h
 
>
 
0
 
?
 
l
o
g
[
l
o
g
.
l
e
n
g
t
h
 
-
 
1
]
.
o
f
f
s
e
t
 
:
 
-
1
;


 
 
 
 
 
 
s
e
t
G
r
o
u
p
B
(
(
g
)
 
=
>
 
(
g
 
<
=
 
h
e
a
d
 
?
 
g
 
+
 
1
 
:
 
g
)
)
;


 
 
 
 
}
,
 
1
9
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
h
a
n
d
l
e
)
;


 
 
}
,
 
[
r
u
n
n
i
n
g
,
 
l
o
g
]
)
;




 
 
c
o
n
s
t
 
r
e
s
e
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
L
o
g
(
[
]
)
;


 
 
 
 
s
e
t
G
r
o
u
p
A
(
0
)
;


 
 
 
 
s
e
t
G
r
o
u
p
B
(
0
)
;


 
 
 
 
i
d
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
 
0
;


 
 
}
;




 
 
c
o
n
s
t
 
r
e
w
i
n
d
A
 
=
 
(
)
 
=
>
 
s
e
t
G
r
o
u
p
A
(
M
a
t
h
.
m
a
x
(
0
,
 
g
r
o
u
p
A
 
-
 
5
)
)
;


 
 
c
o
n
s
t
 
r
e
w
i
n
d
B
 
=
 
(
)
 
=
>
 
s
e
t
G
r
o
u
p
B
(
M
a
t
h
.
m
a
x
(
0
,
 
g
r
o
u
p
B
 
-
 
5
)
)
;




 
 
c
o
n
s
t
 
m
i
n
O
f
f
s
e
t
 
=
 
l
o
g
.
l
e
n
g
t
h
 
?
 
l
o
g
[
0
]
.
o
f
f
s
e
t
 
:
 
0
;


 
 
c
o
n
s
t
 
m
a
x
O
f
f
s
e
t
 
=
 
l
o
g
.
l
e
n
g
t
h
 
?
 
l
o
g
[
l
o
g
.
l
e
n
g
t
h
 
-
 
1
]
.
o
f
f
s
e
t
 
:
 
0
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
O
n
e
 
l
o
g
.
 
T
w
o
 
c
o
n
s
u
m
e
r
 
g
r
o
u
p
s
.
 
I
n
d
e
p
e
n
d
e
n
t
 
o
f
f
s
e
t
s
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
P
r
o
d
u
c
e
r
s
 
a
p
p
e
n
d
 
t
o
 
t
h
e
 
e
n
d
 
o
f
 
t
h
e
 
p
a
r
t
i
t
i
o
n
.
 
C
o
n
s
u
m
e
r
 
G
r
o
u
p
 
A
 
r
e
a
d
s
 
f
a
s
t
 
(
1
.
1
s
/
m
s
g
)
.


 
 
 
 
 
 
 
 
C
o
n
s
u
m
e
r
 
G
r
o
u
p
 
B
 
r
e
a
d
s
 
s
l
o
w
l
y
 
(
1
.
9
s
/
m
s
g
)
.
 
B
o
t
h
 
s
e
e
 
e
v
e
r
y
 
m
e
s
s
a
g
e
;
 
n
e
i
t
h
e
r
 
b
l
o
c
k
s
 
t
h
e


 
 
 
 
 
 
 
 
o
t
h
e
r
.
 
R
e
w
i
n
d
 
e
i
t
h
e
r
 
t
o
 
r
e
p
l
a
y
 
h
i
s
t
o
r
y
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
#
0
b
1
2
2
0
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
2
2
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
L
o
g
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
P
A
R
T
I
T
I
O
N
 
0
 
·
 
T
O
P
I
C
:
 
o
r
d
e
r
s


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
4
,
 
o
v
e
r
f
l
o
w
X
:
 
"
a
u
t
o
"
,
 
p
a
d
d
i
n
g
B
o
t
t
o
m
:
 
1
2
,
 
p
a
d
d
i
n
g
T
o
p
:
 
1
2
,
 
p
o
s
i
t
i
o
n
:
 
"
r
e
l
a
t
i
v
e
"
 
}
}
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
 
i
n
i
t
i
a
l
=
{
f
a
l
s
e
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
g
.
m
a
p
(
(
m
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
i
s
i
t
e
d
 
=
 
m
.
o
f
f
s
e
t
 
<
 
g
r
o
u
p
A
 
|
|
 
m
.
o
f
f
s
e
t
 
<
 
g
r
o
u
p
B
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
H
e
a
d
 
=
 
m
.
o
f
f
s
e
t
 
=
=
=
 
m
a
x
O
f
f
s
e
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
m
.
o
f
f
s
e
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
2
0
,
 
s
c
a
l
e
:
 
0
.
8
5
 
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
,
 
s
c
a
l
e
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
2
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
2
6
0
,
 
d
a
m
p
i
n
g
:
 
2
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
e
x
S
h
r
i
n
k
:
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
6
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
i
s
H
e
a
d
 
?
 
S
D
 
:
 
v
i
s
i
t
e
d
 
?
 
`
$
{
S
D
}
5
5
`
 
:
 
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
3
)
"
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
i
s
H
e
a
d
 
?
 
`
$
{
S
D
}
3
3
`
 
:
 
v
i
s
i
t
e
d
 
?
 
`
$
{
S
D
}
1
0
`
 
:
 
"
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
2
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
#
{
m
.
o
f
f
s
e
t
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,
 
m
a
r
g
i
n
T
o
p
:
 
2
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
.
p
a
y
l
o
a
d
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
;


 
 
 
 
 
 
 
 
 
 
 
 
}
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




 
 
 
 
 
 
 
 
{
/
*
 
C
u
r
s
o
r
s
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
p
o
s
i
t
i
o
n
:
 
"
r
e
l
a
t
i
v
e
"
,
 
h
e
i
g
h
t
:
 
6
0
,
 
m
a
r
g
i
n
T
o
p
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
C
u
r
s
o
r
R
a
i
l
 
c
o
l
o
r
=
{
S
D
}
 
l
a
b
e
l
=
"
G
r
o
u
p
 
A
 
·
 
e
m
a
i
l
-
s
e
r
v
i
c
e
"
 
o
f
f
s
e
t
=
{
g
r
o
u
p
A
}
 
m
i
n
=
{
m
i
n
O
f
f
s
e
t
}
 
m
a
x
=
{
m
a
x
O
f
f
s
e
t
}
 
t
o
p
=
{
0
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
C
u
r
s
o
r
R
a
i
l
 
c
o
l
o
r
=
{
P
U
R
P
L
E
}
 
l
a
b
e
l
=
"
G
r
o
u
p
 
B
 
·
 
a
n
a
l
y
t
i
c
s
"
 
o
f
f
s
e
t
=
{
g
r
o
u
p
B
}
 
m
i
n
=
{
m
i
n
O
f
f
s
e
t
}
 
m
a
x
=
{
m
a
x
O
f
f
s
e
t
}
 
t
o
p
=
{
2
8
}
 
/
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
r
o
l
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
t
-
5
 
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


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
}
 
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
R
u
n
n
i
n
g
(
(
r
)
 
=
>
 
!
r
)
}
 
s
t
y
l
e
=
{
b
t
n
(
S
D
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
i
n
g
 
?
 
<
P
a
u
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
 
:
 
<
P
l
a
y
 
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
}


 
 
 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
i
n
g
 
?
 
"
p
a
u
s
e
"
 
:
 
"
r
e
s
u
m
e
"
}


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
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
b
u
t
t
o
n
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
}
 
o
n
C
l
i
c
k
=
{
r
e
w
i
n
d
A
}
 
s
t
y
l
e
=
{
b
t
n
(
S
D
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
w
i
n
d
I
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
r
e
w
i
n
d
 
A


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
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
b
u
t
t
o
n
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
}
 
o
n
C
l
i
c
k
=
{
r
e
w
i
n
d
B
}
 
s
t
y
l
e
=
{
b
t
n
(
P
U
R
P
L
E
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
w
i
n
d
I
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
r
e
w
i
n
d
 
B


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
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
b
u
t
t
o
n
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
}
 
o
n
C
l
i
c
k
=
{
r
e
s
e
t
}
 
s
t
y
l
e
=
{
b
t
n
(
N
E
U
T
R
A
L
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
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


 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
e
t


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
l
e
x
:
 
1
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
h
e
a
d
:
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
{
m
a
x
O
f
f
s
e
t
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
·
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
A
 
l
a
g
:
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
{
M
a
t
h
.
m
a
x
(
0
,
 
m
a
x
O
f
f
s
e
t
 
-
 
g
r
o
u
p
A
 
+
 
1
)
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
·
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
B
 
l
a
g
:
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
P
U
R
P
L
E
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
{
M
a
t
h
.
m
a
x
(
0
,
 
m
a
x
O
f
f
s
e
t
 
-
 
g
r
o
u
p
B
 
+
 
1
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
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
T
o
p
:
 
1
4
,
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,
 
b
a
c
k
g
r
o
u
n
d
:
 
"
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
6
r
e
m
"
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
K
E
Y
 
I
N
S
I
G
H
T


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
T
h
e
 
l
o
g
 
i
s
 
t
h
e
 
s
o
u
r
c
e
 
o
f
 
t
r
u
t
h
.
 
C
o
n
s
u
m
e
r
s
 
a
r
e
 
s
t
a
t
e
l
e
s
s
 
—
 
t
h
e
i
r
 
p
r
o
g
r
e
s
s
 
I
S
 
t
h
e


 
 
 
 
 
 
 
 
 
 
o
f
f
s
e
t
.
 
C
r
a
s
h
 
a
 
c
o
n
s
u
m
e
r
,
 
r
e
s
t
a
r
t
 
i
t
 
f
r
o
m
 
i
t
s
 
l
a
s
t
 
c
o
m
m
i
t
t
e
d
 
o
f
f
s
e
t
;
 
n
o
t
h
i
n
g
 
l
o
s
t
.
 
N
e
w


 
 
 
 
 
 
 
 
 
 
c
o
n
s
u
m
e
r
 
j
o
i
n
s
?
 
S
t
a
r
t
 
i
t
 
f
r
o
m
 
o
f
f
s
e
t
 
0
 
t
o
 
b
a
c
k
f
i
l
l
,
 
o
r
 
f
r
o
m
 
l
a
t
e
s
t
 
t
o
 
s
k
i
p
 
h
i
s
t
o
r
y
.


 
 
 
 
 
 
 
 
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
 
C
u
r
s
o
r
R
a
i
l
(
{
 
c
o
l
o
r
,
 
l
a
b
e
l
,
 
o
f
f
s
e
t
,
 
m
i
n
,
 
m
a
x
,
 
t
o
p
 
}
:
 
{
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;
 
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
 
o
f
f
s
e
t
:
 
n
u
m
b
e
r
;
 
m
i
n
:
 
n
u
m
b
e
r
;
 
m
a
x
:
 
n
u
m
b
e
r
;
 
t
o
p
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
 
r
a
n
g
e
 
=
 
M
a
t
h
.
m
a
x
(
1
,
 
m
a
x
 
-
 
m
i
n
 
+
 
1
)
;


 
 
c
o
n
s
t
 
p
c
t
 
=
 
(
(
o
f
f
s
e
t
 
-
 
m
i
n
)
 
/
 
r
a
n
g
e
)
 
*
 
1
0
0
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
 
s
t
y
l
e
=
{
{
 
p
o
s
i
t
i
o
n
:
 
"
a
b
s
o
l
u
t
e
"
,
 
t
o
p
,
 
l
e
f
t
:
 
0
,
 
r
i
g
h
t
:
 
0
,
 
h
e
i
g
h
t
:
 
2
4
 
}
}
>


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
p
o
s
i
t
i
o
n
:
 
"
a
b
s
o
l
u
t
e
"
,
 
t
o
p
:
 
8
,
 
l
e
f
t
:
 
0
,
 
r
i
g
h
t
:
 
0
,
 
h
e
i
g
h
t
:
 
2
,
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
c
o
l
o
r
}
3
3
`
 
}
}
 
/
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
 
l
e
f
t
:
 
`
$
{
M
a
t
h
.
m
i
n
(
1
0
0
,
 
M
a
t
h
.
m
a
x
(
0
,
 
p
c
t
)
)
}
%
`
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
2
2
0
,
 
d
a
m
p
i
n
g
:
 
2
4
 
}
}


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
"
a
b
s
o
l
u
t
e
"
,


 
 
 
 
 
 
 
 
 
 
t
o
p
:
 
0
,


 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
2
,


 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
2
4
,


 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
c
o
l
o
r
,


 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
f
o
r
m
O
r
i
g
i
n
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
"
a
b
s
o
l
u
t
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
t
o
p
:
 
-
2
,


 
 
 
 
 
 
 
 
 
 
 
 
l
e
f
t
:
 
-
2
,


 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
9
9
9
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
c
o
l
o
r
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
"
a
b
s
o
l
u
t
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
t
o
p
:
 
-
2
2
,


 
 
 
 
 
 
 
 
 
 
 
 
l
e
f
t
:
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
,


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
t
e
S
p
a
c
e
:
 
"
n
o
w
r
a
p
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
l
a
b
e
l
}
 
·
 
#
{
o
f
f
s
e
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
d
i
v
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
 
p
a
y
l
o
a
d
F
o
r
(
o
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


 
 
c
o
n
s
t
 
v
e
r
b
s
 
=
 
[
"
p
l
a
c
e
"
,
 
"
s
h
i
p
"
,
 
"
p
a
y
"
,
 
"
v
i
e
w
"
,
 
"
c
l
i
c
k
"
]
;


 
 
r
e
t
u
r
n
 
`
$
{
v
e
r
b
s
[
o
 
%
 
v
e
r
b
s
.
l
e
n
g
t
h
]
}
-
$
{
(
o
 
*
 
7
)
 
%
 
1
0
0
0
}
`
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
 
b
t
n
(
c
o
l
o
r
:
 
s
t
r
i
n
g
)
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
{


 
 
r
e
t
u
r
n
 
{


 
 
 
 
d
i
s
p
l
a
y
:
 
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
"
,


 
 
 
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
g
a
p
:
 
6
,


 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,


 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
`
,


 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
c
o
l
o
r
}
1
8
`
,


 
 
 
 
c
o
l
o
r
,


 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,


 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,


 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
}
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
W
h
e
r
e
 
K
a
f
k
a
 
s
h
i
n
e
s
 
v
s
 
a
l
t
e
r
n
a
t
i
v
e
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
C
O
M
P
 
=
 
[


 
 
{


 
 
 
 
k
:
 
"
K
a
f
k
a
"
,


 
 
 
 
s
t
o
r
a
g
e
:
 
"
D
i
s
k
 
·
 
l
o
n
g
 
r
e
t
e
n
t
i
o
n
"
,


 
 
 
 
d
e
l
i
v
e
r
y
:
 
"
A
t
-
l
e
a
s
t
-
o
n
c
e
 
(
o
r
 
e
x
a
c
t
l
y
-
o
n
c
e
 
w
i
t
h
 
t
x
n
s
)
"
,


 
 
 
 
f
i
t
:
 
"
E
v
e
n
t
 
s
o
u
r
c
i
n
g
,
 
a
n
a
l
y
t
i
c
s
 
p
i
p
e
l
i
n
e
s
,
 
a
n
y
t
h
i
n
g
 
w
h
e
r
e
 
r
e
p
l
a
y
 
i
s
 
v
a
l
u
a
b
l
e
"
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
R
a
b
b
i
t
M
Q
"
,


 
 
 
 
s
t
o
r
a
g
e
:
 
"
M
e
m
o
r
y
 
+
 
d
i
s
k
 
·
 
s
h
o
r
t
-
l
i
v
e
d
"
,


 
 
 
 
d
e
l
i
v
e
r
y
:
 
"
A
t
-
l
e
a
s
t
-
o
n
c
e
 
w
i
t
h
 
m
a
n
u
a
l
 
a
c
k
s
"
,


 
 
 
 
f
i
t
:
 
"
C
l
a
s
s
i
c
 
w
o
r
k
 
q
u
e
u
e
,
 
r
e
q
u
e
s
t
 
r
o
u
t
i
n
g
,
 
R
P
C
 
o
v
e
r
 
m
e
s
s
a
g
e
s
"
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
S
Q
S
"
,


 
 
 
 
s
t
o
r
a
g
e
:
 
"
M
a
n
a
g
e
d
 
·
 
1
4
-
d
a
y
 
m
a
x
"
,


 
 
 
 
d
e
l
i
v
e
r
y
:
 
"
A
t
-
l
e
a
s
t
-
o
n
c
e
,
 
F
I
F
O
 
o
p
t
i
o
n
"
,


 
 
 
 
f
i
t
:
 
"
A
W
S
-
n
a
t
i
v
e
 
s
e
r
v
e
r
l
e
s
s
 
w
o
r
k
l
o
a
d
s
,
 
s
i
m
p
l
e
 
q
u
e
u
e
 
n
e
e
d
s
"
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
R
e
d
i
s
 
S
t
r
e
a
m
s
"
,


 
 
 
 
s
t
o
r
a
g
e
:
 
"
M
e
m
o
r
y
 
(
w
i
t
h
 
p
e
r
s
i
s
t
e
n
c
e
)
"
,


 
 
 
 
d
e
l
i
v
e
r
y
:
 
"
A
t
-
l
e
a
s
t
-
o
n
c
e
 
w
i
t
h
 
c
o
n
s
u
m
e
r
 
g
r
o
u
p
s
"
,


 
 
 
 
f
i
t
:
 
"
L
o
w
-
l
a
t
e
n
c
y
 
i
n
-
p
r
o
c
e
s
s
 
s
t
r
e
a
m
i
n
g
,
 
r
e
a
l
-
t
i
m
e
 
d
a
s
h
b
o
a
r
d
s
"
,


 
 
}
,


]
;




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
m
p
a
r
e
(
)
 
{


 
 
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
K
a
f
k
a
 
v
s
 
t
h
e
 
a
l
t
e
r
n
a
t
i
v
e
s
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
K
a
f
k
a
 
i
s
n
&
r
s
q
u
o
;
t
 
a
l
w
a
y
s
 
t
h
e
 
r
i
g
h
t
 
a
n
s
w
e
r
.
 
H
e
r
e
&
r
s
q
u
o
;
s
 
h
o
w
 
i
t
 
s
t
a
c
k
s
 
u
p
 
a
g
a
i
n
s
t
 
t
h
e
 
q
u
e
u
e
s
 
y
o
u
&
r
s
q
u
o
;
l
l


 
 
 
 
 
 
 
 
a
l
s
o
 
s
e
e
 
i
n
 
p
r
o
d
u
c
t
i
o
n
.


 
 
 
 
 
 
<
/
p
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
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
:
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
7
 
}
 
}
 
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
3
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
C
O
M
P
.
m
a
p
(
(
c
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
K
a
f
k
a
 
=
 
c
.
k
 
=
=
=
 
"
K
a
f
k
a
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
o
r
 
=
 
i
s
K
a
f
k
a
 
?
 
S
D
 
:
 
N
E
U
T
R
A
L
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
.
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
d
d
e
n
:
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
s
i
b
l
e
:
 
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
,
 
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
:
 
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
4
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
y
:
 
-
2
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
4
0
0
,
 
d
a
m
p
i
n
g
:
 
2
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
6
p
x
 
1
8
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
5
5
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
c
o
l
o
r
}
0
8
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
1
.
0
5
r
e
m
"
 
}
}
>
{
c
.
k
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
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
g
a
p
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
w
 
l
a
b
e
l
=
"
s
t
o
r
a
g
e
"
 
v
a
l
u
e
=
{
c
.
s
t
o
r
a
g
e
}
 
c
o
l
o
r
=
{
c
o
l
o
r
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
w
 
l
a
b
e
l
=
"
d
e
l
i
v
e
r
y
"
 
v
a
l
u
e
=
{
c
.
d
e
l
i
v
e
r
y
}
 
c
o
l
o
r
=
{
c
o
l
o
r
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
w
 
l
a
b
e
l
=
"
b
e
s
t
 
f
i
t
"
 
v
a
l
u
e
=
{
c
.
f
i
t
}
 
c
o
l
o
r
=
{
c
o
l
o
r
}
 
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
)
}


 
 
 
 
 
 
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
d
i
v
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
 
R
o
w
(
{
 
l
a
b
e
l
,
 
v
a
l
u
e
,
 
c
o
l
o
r
 
}
:
 
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
 
v
a
l
u
e
:
 
s
t
r
i
n
g
;
 
c
o
l
o
r
:
 
s
t
r
i
n
g
 
}
)
 
{


 
 
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
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
8
0
p
x
 
1
f
r
"
,
 
g
a
p
:
 
8
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
b
a
s
e
l
i
n
e
"
 
}
}
>


 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
 
}
}
>


 
 
 
 
 
 
 
 
{
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


 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
 
}
}
>
{
v
a
l
u
e
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




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
A
c
t
i
v
i
t
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
 
S
D
_
L
5
_
K
a
f
k
a
A
c
t
i
v
i
t
y
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
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
 
=
>
 
v
o
i
d
 
}
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
E
n
g
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
d
e
f
"
,
 
l
a
b
e
l
:
 
"
D
e
f
i
n
i
t
i
o
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
D
e
f
i
n
i
t
i
o
n
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
l
o
g
"
,
 
l
a
b
e
l
:
 
"
L
o
g
 
+
 
O
f
f
s
e
t
s
"
,
 
i
c
o
n
:
 
<
L
a
y
e
r
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
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
P
a
r
t
i
t
i
o
n
e
d
L
o
g
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
c
o
m
p
a
r
e
"
,
 
l
a
b
e
l
:
 
"
v
s
 
A
l
t
e
r
n
a
t
i
v
e
s
"
,
 
i
c
o
n
:
 
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
,
 
c
o
n
t
e
n
t
:
 
<
C
o
m
p
a
r
e
 
/
>
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
E
n
g
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
c
o
n
s
u
m
e
r
 
c
r
a
s
h
e
d
 
f
o
r
 
4
 
h
o
u
r
s
.
 
W
h
e
n
 
i
t
 
r
e
s
t
a
r
t
s
,
 
w
h
a
t
 
d
o
e
s
 
i
t
 
p
r
o
c
e
s
s
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
N
o
t
h
i
n
g
 
—
 
t
h
o
s
e
 
m
e
s
s
a
g
e
s
 
a
r
e
 
g
o
n
e
.
"
,


 
 
 
 
 
 
 
 
"
A
l
l
 
t
h
e
 
m
e
s
s
a
g
e
s
 
f
r
o
m
 
i
t
s
 
l
a
s
t
 
c
o
m
m
i
t
t
e
d
 
o
f
f
s
e
t
 
o
n
w
a
r
d
s
 
(
a
s
s
u
m
i
n
g
 
r
e
t
e
n
t
i
o
n
 
c
o
v
e
r
s
 
4
h
)
.
"
,


 
 
 
 
 
 
 
 
"
O
n
l
y
 
t
h
e
 
l
a
t
e
s
t
 
m
e
s
s
a
g
e
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
m
u
s
t
 
r
e
q
u
e
s
t
 
a
 
r
e
-
s
e
n
d
 
f
r
o
m
 
t
h
e
 
p
r
o
d
u
c
e
r
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
K
a
f
k
a
'
s
 
k
i
l
l
e
r
 
f
e
a
t
u
r
e
.
 
M
e
s
s
a
g
e
s
 
p
e
r
s
i
s
t
 
o
n
 
d
i
s
k
 
r
e
g
a
r
d
l
e
s
s
 
o
f
 
c
o
n
s
u
m
p
t
i
o
n
.
 
T
h
e
 
c
o
n
s
u
m
e
r
'
s
 
o
f
f
s
e
t
 
i
s
 
i
t
s
 
b
o
o
k
m
a
r
k
.
 
R
e
s
t
a
r
t
 
f
r
o
m
 
t
h
e
r
e
 
a
n
d
 
y
o
u
'
l
l
 
c
a
t
c
h
 
u
p
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
Y
o
u
 
a
d
d
 
a
n
 
a
n
a
l
y
t
i
c
s
 
c
o
n
s
u
m
e
r
 
t
h
a
t
 
n
e
e
d
s
 
t
o
 
c
o
u
n
t
 
o
r
d
e
r
s
 
f
o
r
 
t
h
e
 
l
a
s
t
 
7
 
d
a
y
s
.
 
W
h
a
t
'
s
 
t
h
e
 
c
l
e
a
n
e
s
t
 
a
p
p
r
o
a
c
h
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
R
e
p
l
a
y
 
t
h
e
 
o
r
d
e
r
 
t
o
p
i
c
 
f
r
o
m
 
o
f
f
s
e
t
 
0
 
(
o
r
 
t
h
e
 
t
i
m
e
s
t
a
m
p
 
o
f
 
7
 
d
a
y
s
 
a
g
o
)
.
"
,


 
 
 
 
 
 
 
 
"
B
u
i
l
d
 
a
 
s
e
p
a
r
a
t
e
 
b
a
t
c
h
 
p
i
p
e
l
i
n
e
.
"
,


 
 
 
 
 
 
 
 
"
R
e
a
d
 
t
h
e
 
d
a
t
a
b
a
s
e
 
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
,


 
 
 
 
 
 
 
 
"
E
m
a
i
l
 
t
h
e
 
d
a
t
a
 
t
e
a
m
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
0
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
K
a
f
k
a
'
s
 
r
e
t
e
n
t
i
o
n
 
I
S
 
t
h
e
 
h
i
s
t
o
r
i
c
a
l
 
r
e
c
o
r
d
.
 
Y
o
u
r
 
n
e
w
 
c
o
n
s
u
m
e
r
 
s
u
b
s
c
r
i
b
e
s
 
t
o
 
t
h
e
 
t
o
p
i
c
,
 
s
e
e
k
s
 
t
o
 
t
h
e
 
t
i
m
e
s
t
a
m
p
 
7
 
d
a
y
s
 
a
g
o
,
 
a
n
d
 
p
r
o
c
e
s
s
e
s
 
e
v
e
r
y
t
h
i
n
g
 
s
i
n
c
e
.
 
Z
e
r
o
 
i
m
p
a
c
t
 
o
n
 
e
x
i
s
t
i
n
g
 
c
o
n
s
u
m
e
r
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
y
 
i
s
 
o
r
d
e
r
 
g
u
a
r
a
n
t
e
e
d
 
w
i
t
h
i
n
 
a
 
p
a
r
t
i
t
i
o
n
 
b
u
t
 
N
O
T
 
a
c
r
o
s
s
 
p
a
r
t
i
t
i
o
n
s
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
R
a
n
d
o
m
.
"
,


 
 
 
 
 
 
 
 
"
E
a
c
h
 
p
a
r
t
i
t
i
o
n
 
i
s
 
i
t
s
 
o
w
n
 
l
o
g
 
o
n
 
i
t
s
 
o
w
n
 
b
r
o
k
e
r
.
 
C
r
o
s
s
-
p
a
r
t
i
t
i
o
n
 
o
r
d
e
r
 
w
o
u
l
d
 
r
e
q
u
i
r
e
 
c
r
o
s
s
-
b
r
o
k
e
r
 
c
o
o
r
d
i
n
a
t
i
o
n
,
 
d
e
f
e
a
t
i
n
g
 
t
h
e
 
p
a
r
a
l
l
e
l
i
s
m
.
"
,


 
 
 
 
 
 
 
 
"
K
a
f
k
a
 
h
a
s
 
a
 
b
u
g
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
d
e
p
e
n
d
s
 
o
n
 
t
h
e
 
O
S
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
P
a
r
t
i
t
i
o
n
s
 
a
r
e
 
i
n
d
e
p
e
n
d
e
n
t
 
f
o
r
 
p
a
r
a
l
l
e
l
i
s
m
.
 
W
i
t
h
i
n
 
o
n
e
 
p
a
r
t
i
t
i
o
n
,
 
a
p
p
e
n
d
 
o
r
d
e
r
 
i
s
 
e
n
f
o
r
c
e
d
.
 
A
c
r
o
s
s
 
p
a
r
t
i
t
i
o
n
s
 
y
o
u
'
d
 
n
e
e
d
 
a
 
g
l
o
b
a
l
 
s
e
q
u
e
n
c
e
r
,
 
w
h
i
c
h
 
w
o
u
l
d
 
s
e
r
i
a
l
i
z
e
 
a
l
l
 
w
r
i
t
e
s
 
—
 
e
x
a
c
t
l
y
 
w
h
a
t
 
K
a
f
k
a
 
a
v
o
i
d
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
T
w
o
 
c
o
n
s
u
m
e
r
s
 
i
n
 
t
h
e
 
S
A
M
E
 
c
o
n
s
u
m
e
r
 
g
r
o
u
p
.
 
T
h
e
 
t
o
p
i
c
 
h
a
s
 
4
 
p
a
r
t
i
t
i
o
n
s
.
 
H
o
w
 
d
o
e
s
 
K
a
f
k
a
 
a
s
s
i
g
n
 
w
o
r
k
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
E
a
c
h
 
c
o
n
s
u
m
e
r
 
r
e
a
d
s
 
a
l
l
 
4
 
p
a
r
t
i
t
i
o
n
s
.
"
,


 
 
 
 
 
 
 
 
"
E
a
c
h
 
c
o
n
s
u
m
e
r
 
r
e
a
d
s
 
2
 
p
a
r
t
i
t
i
o
n
s
;
 
p
a
r
t
i
t
i
o
n
s
 
a
r
e
 
s
p
l
i
t
 
a
c
r
o
s
s
 
c
o
n
s
u
m
e
r
s
 
w
i
t
h
i
n
 
a
 
g
r
o
u
p
.
"
,


 
 
 
 
 
 
 
 
"
B
o
t
h
 
c
o
n
s
u
m
e
r
s
 
c
o
m
p
e
t
e
 
f
o
r
 
e
v
e
r
y
 
m
e
s
s
a
g
e
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
t
a
k
e
 
t
u
r
n
s
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
W
i
t
h
i
n
 
a
 
c
o
n
s
u
m
e
r
 
g
r
o
u
p
,
 
p
a
r
t
i
t
i
o
n
s
 
a
r
e
 
d
i
s
t
r
i
b
u
t
e
d
 
a
c
r
o
s
s
 
c
o
n
s
u
m
e
r
s
 
(
w
o
r
k
 
d
i
s
t
r
i
b
u
t
i
o
n
)
.
 
T
w
o
 
c
o
n
s
u
m
e
r
s
 
+
 
f
o
u
r
 
p
a
r
t
i
t
i
o
n
s
 
=
 
e
a
c
h
 
h
a
n
d
l
e
s
 
t
w
o
.
 
A
c
r
o
s
s
 
g
r
o
u
p
s
,
 
b
o
t
h
 
g
r
o
u
p
s
 
s
e
e
 
e
v
e
r
y
 
m
e
s
s
a
g
e
 
(
p
u
b
/
s
u
b
)
.
"
,


 
 
 
 
}
,


 
 
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
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
K
a
f
k
a
 
P
a
r
t
i
t
i
o
n
e
d
 
L
o
g
"


 
 
 
 
 
 
l
e
v
e
l
=
{
5
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
4
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
T
h
e
 
s
t
r
e
a
m
i
n
g
-
s
y
s
t
e
m
 
a
n
s
w
e
r
 
i
n
 
a
n
y
 
d
a
t
a
-
p
l
a
t
f
o
r
m
 
i
n
t
e
r
v
i
e
w
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}




