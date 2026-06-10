
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
 
D
a
t
a
b
a
s
e
,
 
G
l
o
b
e
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
 
W
A
R
N
 
=
 
"
#
f
5
9
e
0
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
S
t
r
e
a
m
 
e
v
e
r
y
 
d
a
t
a
b
a
s
e
 
c
h
a
n
g
e
 
t
o
 
a
n
y
o
n
e
 
w
h
o
 
w
a
n
t
s
 
i
t
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


 
 
 
 
 
 
 
 
<
b
>
C
h
a
n
g
e
 
D
a
t
a
 
C
a
p
t
u
r
e
 
(
C
D
C
)
<
/
b
>
 
t
a
i
l
s
 
y
o
u
r
 
d
a
t
a
b
a
s
e
&
r
s
q
u
o
;
s
 
w
r
i
t
e
-
a
h
e
a
d
 
l
o
g
 
a
n
d
 
e
m
i
t
s
 
e
a
c
h


 
 
 
 
 
 
 
 
c
o
m
m
i
t
t
e
d
 
c
h
a
n
g
e
 
a
s
 
a
n
 
e
v
e
n
t
.
 
D
o
w
n
s
t
r
e
a
m
 
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
s
e
a
r
c
h
 
i
n
d
e
x
,
 
c
a
c
h
e
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


 
 
 
 
 
 
 
 
w
a
r
e
h
o
u
s
e
)
 
s
u
b
s
c
r
i
b
e
 
t
o
 
t
h
o
s
e
 
e
v
e
n
t
s
 
a
n
d
 
s
t
a
y
 
i
n
 
s
y
n
c
 
—
 
w
i
t
h
o
u
t
 
y
o
u
r
 
a
p
p
l
i
c
a
t
i
o
n
 
c
o
d
e


 
 
 
 
 
 
 
 
e
v
e
r
 
k
n
o
w
i
n
g
 
t
h
e
y
 
e
x
i
s
t
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
8
 
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
C
a
p
t
u
r
e
"
,
 
v
:
 
"
A
 
c
o
n
n
e
c
t
o
r
 
r
e
a
d
s
 
t
h
e
 
D
B
'
s
 
W
A
L
 
/
 
b
i
n
l
o
g
.
 
P
o
s
t
g
r
e
s
 
l
o
g
i
c
a
l
 
r
e
p
l
i
c
a
t
i
o
n
,
 
M
y
S
Q
L
 
b
i
n
l
o
g
,
 
M
o
n
g
o
D
B
 
o
p
l
o
g
.
 
N
o
 
a
p
p
 
c
o
d
e
 
c
h
a
n
g
e
s
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
T
r
a
n
s
f
o
r
m
"
,
 
v
:
 
"
C
o
n
v
e
r
t
 
r
a
w
 
r
o
w
 
e
v
e
n
t
s
 
i
n
t
o
 
d
o
m
a
i
n
 
e
v
e
n
t
s
.
 
F
i
l
t
e
r
,
 
e
n
r
i
c
h
,
 
d
e
n
o
r
m
a
l
i
z
e
.
 
O
f
t
e
n
 
a
 
K
a
f
k
a
 
S
t
r
e
a
m
s
 
o
r
 
F
l
i
n
k
 
j
o
b
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
A
p
p
l
y
"
,
 
v
:
 
"
D
o
w
n
s
t
r
e
a
m
 
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
d
e
x
 
i
n
t
o
 
E
l
a
s
t
i
c
s
e
a
r
c
h
,
 
r
e
f
i
l
l
 
c
a
c
h
e
s
,
 
w
r
i
t
e
 
t
o
 
a
 
d
a
t
a
 
w
a
r
e
h
o
u
s
e
,
 
f
i
r
e
 
a
l
e
r
t
s
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
 
1
0
 
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
5
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


 
 
 
 
 
 
 
 
 
 
W
H
Y
 
N
O
T
 
J
U
S
T
 
D
U
A
L
-
W
R
I
T
E
?


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
T
e
m
p
t
i
n
g
 
s
o
l
u
t
i
o
n
:
 
w
h
e
n
 
t
h
e
 
a
p
p
 
w
r
i
t
e
s
 
t
o
 
t
h
e
 
D
B
,
 
a
l
s
o
 
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
 
s
e
a
r
c
h
 
i
n
d
e
x
.
 
T
h
e


 
 
 
 
 
 
 
 
 
 
p
r
o
b
l
e
m
:
 
<
b
>
t
w
o
 
w
r
i
t
e
s
 
t
o
 
t
w
o
 
s
y
s
t
e
m
s
 
c
a
n
&
r
s
q
u
o
;
t
 
b
e
 
a
t
o
m
i
c
 
w
i
t
h
o
u
t
 
a
 
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


 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
a
c
t
i
o
n
<
/
b
>
.
 
C
r
a
s
h
 
b
e
t
w
e
e
n
 
t
h
e
m
 
a
n
d
 
t
h
e
 
s
y
s
t
e
m
s
 
s
i
l
e
n
t
l
y
 
d
i
v
e
r
g
e
.
 
C
D
C
 
f
i
x
e
s
 
t
h
i
s
 
b
y


 
 
 
 
 
 
 
 
 
 
t
r
e
a
t
i
n
g
 
t
h
e
 
D
B
&
r
s
q
u
o
;
s
 
l
o
g
 
a
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
 
—
 
r
e
p
l
a
y
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
 
e
v
e
n
t
u
a
l


 
 
 
 
 
 
 
 
 
 
c
o
n
v
e
r
g
e
n
c
e
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
D
e
b
e
z
i
u
m
<
/
b
>
 
i
s
 
t
h
e
 
c
a
n
o
n
i
c
a
l
 
o
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
 
C
D
C
 
c
o
n
n
e
c
t
o
r
 
—
 
t
a
p
s
 
P
o
s
t
g
r
e
s
 
/
 
M
y
S
Q
L
 
/


 
 
 
 
 
 
 
 
 
 
M
o
n
g
o
D
B
 
/
 
S
Q
L
 
S
e
r
v
e
r
 
W
A
L
 
a
n
d
 
p
u
s
h
e
s
 
t
o
 
K
a
f
k
a
.
 
<
b
>
A
W
S
 
D
M
S
<
/
b
>
 
f
o
r
 
c
r
o
s
s
-
c
l
o
u
d


 
 
 
 
 
 
 
 
 
 
r
e
p
l
i
c
a
t
i
o
n
.
 
<
b
>
F
i
v
e
t
r
a
n
 
/
 
A
i
r
b
y
t
e
<
/
b
>
 
f
o
r
 
m
a
n
a
g
e
d
 
C
D
C
 
i
n
t
o
 
w
a
r
e
h
o
u
s
e
s
.
 
<
b
>
L
i
n
k
e
d
i
n
<
/
b
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
b
u
i
l
t
 
K
a
f
k
a
 
p
a
r
t
l
y
 
f
o
r
 
t
h
i
s
.
 
E
v
e
r
y
 
&
l
d
q
u
o
;
t
h
e
 
s
e
a
r
c
h
 
i
n
d
e
x
 
i
s
 
X
 
s
e
c
o
n
d
s
 
b
e
h
i
n
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
&
r
d
q
u
o
;
 
q
u
o
t
e
 
i
s
 
a
 
C
D
C
 
p
i
p
e
l
i
n
e
 
l
a
g
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
i
p
e
l
i
n
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




i
n
t
e
r
f
a
c
e
 
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
 
r
o
w
:
 
s
t
r
i
n
g
;
 
t
D
b
:
 
n
u
m
b
e
r
;
 
t
C
d
c
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
 
t
T
o
p
i
c
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
 
t
I
n
d
e
x
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
 
t
C
l
i
e
n
t
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
D
C
D
e
m
o
(
)
 
{


 
 
c
o
n
s
t
 
[
e
v
e
n
t
s
,
 
s
e
t
E
v
e
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
t
N
o
w
,
 
s
e
t
T
N
o
w
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
 
[
i
d
C
o
u
n
t
e
r
,
 
s
e
t
I
d
C
o
u
n
t
e
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
0
)
;




 
 
/
/
 
L
a
g
 
p
r
o
f
i
l
e
 
(
m
s
)
 
p
e
r
 
h
o
p


 
 
c
o
n
s
t
 
L
A
G
_
C
D
C
 
=
 
6
0
;


 
 
c
o
n
s
t
 
L
A
G
_
K
A
F
K
A
 
=
 
8
0
;


 
 
c
o
n
s
t
 
L
A
G
_
I
N
D
E
X
 
=
 
2
4
0
;


 
 
c
o
n
s
t
 
L
A
G
_
C
L
I
E
N
T
 
=
 
1
2
0
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


 
 
 
 
 
 
s
e
t
T
N
o
w
(
(
t
)
 
=
>
 
t
 
+
 
8
0
)
;


 
 
 
 
}
,
 
8
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
 
e
m
i
t
 
a
 
w
r
i
t
e
 
e
v
e
r
y
 
~
1
5
0
0
m
s


 
 
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
I
d
C
o
u
n
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
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
I
d
 
=
 
i
d
 
+
 
1
;


 
 
 
 
 
 
 
 
s
e
t
E
v
e
n
t
s
(
(
e
s
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
E
v
e
n
t
:
 
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
 
=
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
n
e
w
I
d
,


 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
:
 
`
u
s
e
r
s
[
$
{
1
0
0
 
+
 
n
e
w
I
d
}
]
`
,


 
 
 
 
 
 
 
 
 
 
 
 
t
D
b
:
 
t
N
o
w
,


 
 
 
 
 
 
 
 
 
 
 
 
t
C
d
c
:
 
n
u
l
l
,


 
 
 
 
 
 
 
 
 
 
 
 
t
T
o
p
i
c
:
 
n
u
l
l
,


 
 
 
 
 
 
 
 
 
 
 
 
t
I
n
d
e
x
:
 
n
u
l
l
,


 
 
 
 
 
 
 
 
 
 
 
 
t
C
l
i
e
n
t
:
 
n
u
l
l
,


 
 
 
 
 
 
 
 
 
 
}
;


 
 
 
 
 
 
 
 
 
 
/
/
 
S
c
h
e
d
u
l
e
 
t
h
e
 
p
r
o
p
a
g
a
t
i
o
n


 
 
 
 
 
 
 
 
 
 
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
E
v
e
n
t
s
(
(
q
s
)
 
=
>
 
q
s
.
m
a
p
(
(
q
)
 
=
>
 
(
q
.
i
d
 
=
=
=
 
n
e
w
I
d
 
?
 
{
 
.
.
.
q
,
 
t
C
d
c
:
 
t
N
o
w
 
+
 
L
A
G
_
C
D
C
 
}
 
:
 
q
)
)
)
,
 
L
A
G
_
C
D
C
)
;


 
 
 
 
 
 
 
 
 
 
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
E
v
e
n
t
s
(
(
q
s
)
 
=
>
 
q
s
.
m
a
p
(
(
q
)
 
=
>
 
(
q
.
i
d
 
=
=
=
 
n
e
w
I
d
 
?
 
{
 
.
.
.
q
,
 
t
T
o
p
i
c
:
 
t
N
o
w
 
+
 
L
A
G
_
C
D
C
 
+
 
L
A
G
_
K
A
F
K
A
 
}
 
:
 
q
)
)
)
,
 
L
A
G
_
C
D
C
 
+
 
L
A
G
_
K
A
F
K
A
)
;


 
 
 
 
 
 
 
 
 
 
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
E
v
e
n
t
s
(
(
q
s
)
 
=
>
 
q
s
.
m
a
p
(
(
q
)
 
=
>
 
(
q
.
i
d
 
=
=
=
 
n
e
w
I
d
 
?
 
{
 
.
.
.
q
,
 
t
I
n
d
e
x
:
 
t
N
o
w
 
+
 
L
A
G
_
C
D
C
 
+
 
L
A
G
_
K
A
F
K
A
 
+
 
L
A
G
_
I
N
D
E
X
 
}
 
:
 
q
)
)
)
,
 
L
A
G
_
C
D
C
 
+
 
L
A
G
_
K
A
F
K
A
 
+
 
L
A
G
_
I
N
D
E
X
)
;


 
 
 
 
 
 
 
 
 
 
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
E
v
e
n
t
s
(
(
q
s
)
 
=
>
 
q
s
.
m
a
p
(
(
q
)
 
=
>
 
(
q
.
i
d
 
=
=
=
 
n
e
w
I
d
 
?
 
{
 
.
.
.
q
,
 
t
C
l
i
e
n
t
:
 
t
N
o
w
 
+
 
L
A
G
_
C
D
C
 
+
 
L
A
G
_
K
A
F
K
A
 
+
 
L
A
G
_
I
N
D
E
X
 
+
 
L
A
G
_
C
L
I
E
N
T
 
}
 
:
 
q
)
)
)
,
 
L
A
G
_
C
D
C
 
+
 
L
A
G
_
K
A
F
K
A
 
+
 
L
A
G
_
I
N
D
E
X
 
+
 
L
A
G
_
C
L
I
E
N
T
)
;


 
 
 
 
 
 
 
 
 
 
/
/
 
L
i
m
i
t
 
k
e
p
t
 
e
v
e
n
t
s


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
i
m
i
t
e
d
 
=
 
[
.
.
.
e
s
,
 
n
e
w
E
v
e
n
t
]
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
l
i
m
i
t
e
d
.
l
e
n
g
t
h
 
>
 
5
 
?
 
l
i
m
i
t
e
d
.
s
l
i
c
e
(
l
i
m
i
t
e
d
.
l
e
n
g
t
h
 
-
 
5
)
 
:
 
l
i
m
i
t
e
d
;


 
 
 
 
 
 
 
 
}
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
w
I
d
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
1
5
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
 
t
N
o
w
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
E
v
e
n
t
s
(
[
]
)
;


 
 
 
 
s
e
t
T
N
o
w
(
0
)
;


 
 
 
 
s
e
t
I
d
C
o
u
n
t
e
r
(
0
)
;


 
 
 
 
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
t
r
u
e
)
;


 
 
}
;




 
 
c
o
n
s
t
 
s
t
a
g
e
s
 
=
 
[


 
 
 
 
{
 
k
e
y
:
 
"
t
D
b
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
B
 
W
r
i
t
e
"
,
 
x
:
 
6
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
 
}
,


 
 
 
 
{
 
k
e
y
:
 
"
t
C
d
c
"
,
 
l
a
b
e
l
:
 
"
C
D
C
 
C
o
n
n
e
c
t
o
r
"
,
 
x
:
 
2
2
0
,
 
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
 
}
,


 
 
 
 
{
 
k
e
y
:
 
"
t
T
o
p
i
c
"
,
 
l
a
b
e
l
:
 
"
K
a
f
k
a
 
T
o
p
i
c
"
,
 
x
:
 
3
8
0
,
 
c
o
l
o
r
:
 
W
A
R
N
 
}
,


 
 
 
 
{
 
k
e
y
:
 
"
t
I
n
d
e
x
"
,
 
l
a
b
e
l
:
 
"
S
e
a
r
c
h
 
I
n
d
e
x
"
,
 
x
:
 
5
4
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
 
}
,


 
 
 
 
{
 
k
e
y
:
 
"
t
C
l
i
e
n
t
"
,
 
l
a
b
e
l
:
 
"
C
l
i
e
n
t
"
,
 
x
:
 
6
8
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
 
}
,


 
 
]
 
a
s
 
c
o
n
s
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
 
w
r
i
t
e
 
b
e
c
o
m
e
s
 
f
i
v
e
 
h
o
p
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


 
 
 
 
 
 
 
 
E
v
e
r
y
 
1
.
5
s
 
a
 
r
o
w
 
i
s
 
w
r
i
t
t
e
n
 
t
o
 
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
.
 
T
h
e
 
c
h
a
n
g
e
 
r
i
p
p
l
e
s
 
t
h
r
o
u
g
h
 
t
h
e
 
C
D
C


 
 
 
 
 
 
 
 
c
o
n
n
e
c
t
o
r
,
 
K
a
f
k
a
,
 
t
h
e
 
s
e
a
r
c
h
 
i
n
d
e
x
,
 
a
n
d
 
f
i
n
a
l
l
y
 
t
h
e
 
c
l
i
e
n
t
&
r
s
q
u
o
;
s
 
b
r
o
w
s
e
r
.
 
E
a
c
h
 
h
o
p
 
a
d
d
s


 
 
 
 
 
 
 
 
l
a
t
e
n
c
y
 
—
 
t
h
a
t
 
a
g
g
r
e
g
a
t
e
 
i
s
 
t
h
e
 
p
r
o
p
a
g
a
t
i
o
n
 
l
a
g
 
y
o
u
r
 
u
s
e
r
s
 
a
c
t
u
a
l
l
y
 
s
e
e
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
 
}
}
>


 
 
 
 
 
 
 
 
<
s
v
g
 
v
i
e
w
B
o
x
=
"
0
 
0
 
7
2
0
 
2
8
0
"
 
w
i
d
t
h
=
"
1
0
0
%
"
 
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
x
W
i
d
t
h
:
 
7
6
0
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
b
l
o
c
k
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
 
a
u
t
o
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
t
a
g
e
 
b
o
x
e
s
 
+
 
l
a
b
e
l
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
s
t
a
g
e
s
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
g
 
k
e
y
=
{
s
.
k
e
y
}
 
t
r
a
n
s
f
o
r
m
=
{
`
t
r
a
n
s
l
a
t
e
(
$
{
s
.
x
}
,
 
1
1
0
)
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
w
i
d
t
h
=
{
1
2
0
}
 
h
e
i
g
h
t
=
{
6
0
}
 
r
x
=
{
8
}
 
f
i
l
l
=
{
`
$
{
s
.
c
o
l
o
r
}
2
2
`
}
 
s
t
r
o
k
e
=
{
s
.
c
o
l
o
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
6
0
}
 
y
=
{
2
8
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
"
#
e
5
e
7
e
b
"
 
f
o
n
t
S
i
z
e
=
{
1
2
}
 
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
=
{
7
0
0
}
 
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
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
6
0
}
 
y
=
{
4
4
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
{
s
.
c
o
l
o
r
}
 
f
o
n
t
S
i
z
e
=
{
1
0
}
 
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
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
g
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
)
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
e
d
g
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
s
t
a
g
e
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
 
-
1
)
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
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
t
a
g
e
s
[
i
 
+
 
1
]
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
<
l
i
n
e
 
k
e
y
=
{
i
}
 
x
1
=
{
s
.
x
 
+
 
1
2
0
}
 
y
1
=
{
1
4
0
}
 
x
2
=
{
n
e
x
t
.
x
}
 
y
2
=
{
1
4
0
}
 
s
t
r
o
k
e
=
{
N
E
U
T
R
A
L
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
3
 
4
"
 
/
>
;


 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
n
i
m
a
t
e
d
 
e
v
e
n
t
 
d
o
t
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
e
v
e
n
t
s
.
m
a
p
(
(
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
f
i
g
u
r
e
 
c
u
r
r
e
n
t
 
x
 
p
o
s
i
t
i
o
n
 
b
a
s
e
d
 
o
n
 
w
h
i
c
h
 
s
t
a
g
e
s
 
h
a
v
e
 
b
e
e
n
 
r
e
a
c
h
e
d


 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
 
c
x
 
=
 
s
t
a
g
e
s
[
0
]
.
x
 
+
 
6
0
;


 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
 
v
i
s
i
b
l
e
 
=
 
t
r
u
e
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
e
.
t
C
l
i
e
n
t
 
!
=
=
 
n
u
l
l
 
&
&
 
t
N
o
w
 
>
=
 
e
.
t
C
l
i
e
n
t
 
+
 
6
0
0
)
 
v
i
s
i
b
l
e
 
=
 
f
a
l
s
e
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
e
.
t
C
l
i
e
n
t
 
!
=
=
 
n
u
l
l
 
&
&
 
t
N
o
w
 
>
=
 
e
.
t
C
l
i
e
n
t
)
 
c
x
 
=
 
s
t
a
g
e
s
[
4
]
.
x
 
+
 
6
0
;


 
 
 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
e
.
t
I
n
d
e
x
 
!
=
=
 
n
u
l
l
 
&
&
 
t
N
o
w
 
>
=
 
e
.
t
I
n
d
e
x
)
 
c
x
 
=
 
s
t
a
g
e
s
[
3
]
.
x
 
+
 
6
0
;


 
 
 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
e
.
t
T
o
p
i
c
 
!
=
=
 
n
u
l
l
 
&
&
 
t
N
o
w
 
>
=
 
e
.
t
T
o
p
i
c
)
 
c
x
 
=
 
s
t
a
g
e
s
[
2
]
.
x
 
+
 
6
0
;


 
 
 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
e
.
t
C
d
c
 
!
=
=
 
n
u
l
l
 
&
&
 
t
N
o
w
 
>
=
 
e
.
t
C
d
c
)
 
c
x
 
=
 
s
t
a
g
e
s
[
1
]
.
x
 
+
 
6
0
;




 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
v
i
s
i
b
l
e
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
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
e
.
i
d
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
 
c
x
,
 
c
y
:
 
1
4
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
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
6
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
S
D
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
"
#
0
b
1
2
2
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
<
/
s
v
g
>




 
 
 
 
 
 
 
 
{
/
*
 
H
o
p
-
b
y
-
h
o
p
 
l
a
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
4
 
g
a
p
-
2
 
m
t
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
D
B
 
→
 
C
D
C
"
 
v
a
l
u
e
=
{
`
$
{
L
A
G
_
C
D
C
}
m
s
`
}
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
C
D
C
 
→
 
T
o
p
i
c
"
 
v
a
l
u
e
=
{
`
$
{
L
A
G
_
K
A
F
K
A
}
m
s
`
}
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
T
o
p
i
c
 
→
 
I
n
d
e
x
"
 
v
a
l
u
e
=
{
`
$
{
L
A
G
_
I
N
D
E
X
}
m
s
`
}
 
c
o
l
o
r
=
{
W
A
R
N
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
I
n
d
e
x
 
→
 
C
l
i
e
n
t
"
 
v
a
l
u
e
=
{
`
$
{
L
A
G
_
C
L
I
E
N
T
}
m
s
`
}
 
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
 
8
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
0
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
e
n
d
-
t
o
-
e
n
d
 
p
r
o
p
a
g
a
t
i
o
n
 
l
a
g
:
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
9
5
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
L
A
G
_
C
D
C
 
+
 
L
A
G
_
K
A
F
K
A
 
+
 
L
A
G
_
I
N
D
E
X
 
+
 
L
A
G
_
C
L
I
E
N
T
}
 
m
s


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
w
r
i
t
e
s
 
p
r
o
c
e
s
s
e
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
i
d
C
o
u
n
t
e
r
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
 
S
t
a
t
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
0
p
x
 
1
2
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
3
3
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
0
`
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
 
4
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
9
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
 
C
o
m
m
o
n
 
p
i
p
e
l
i
n
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
 
P
I
P
E
L
I
N
E
S
 
=
 
[


 
 
{
 
n
a
m
e
:
 
"
D
B
 
→
 
S
e
a
r
c
h
 
I
n
d
e
x
"
,
 
w
h
a
t
:
 
"
P
o
s
t
g
r
e
s
 
→
 
D
e
b
e
z
i
u
m
 
→
 
K
a
f
k
a
 
→
 
E
l
a
s
t
i
c
s
e
a
r
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
.
 
K
e
e
p
s
 
f
u
l
l
-
t
e
x
t
 
s
e
a
r
c
h
 
i
n
 
s
y
n
c
 
w
i
t
h
i
n
 
s
e
c
o
n
d
s
 
o
f
 
t
h
e
 
w
r
i
t
e
.
"
,
 
e
x
:
 
"
G
i
t
H
u
b
 
c
o
d
e
 
s
e
a
r
c
h
,
 
A
l
g
o
l
i
a
 
i
n
g
e
s
t
i
o
n
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
D
B
 
→
 
C
a
c
h
e
"
,
 
w
h
a
t
:
 
"
M
y
S
Q
L
 
→
 
M
a
x
w
e
l
l
 
/
 
D
e
b
e
z
i
u
m
 
→
 
K
a
f
k
a
 
→
 
R
e
d
i
s
 
c
a
c
h
e
.
 
A
u
t
o
-
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
 
o
n
 
e
v
e
r
y
 
w
r
i
t
e
;
 
n
e
v
e
r
 
s
t
a
l
e
.
"
,
 
e
x
:
 
"
S
h
o
p
i
f
y
 
p
r
o
d
u
c
t
 
c
a
t
a
l
o
g
,
 
R
a
z
o
r
p
a
y
 
m
e
r
c
h
a
n
t
 
c
a
c
h
e
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
D
B
 
→
 
D
a
t
a
 
W
a
r
e
h
o
u
s
e
"
,
 
w
h
a
t
:
 
"
P
o
s
t
g
r
e
s
 
→
 
F
i
v
e
t
r
a
n
 
→
 
B
i
g
Q
u
e
r
y
 
/
 
S
n
o
w
f
l
a
k
e
.
 
N
e
a
r
-
r
e
a
l
-
t
i
m
e
 
a
n
a
l
y
t
i
c
s
 
o
n
 
o
p
e
r
a
t
i
o
n
a
l
 
d
a
t
a
.
"
,
 
e
x
:
 
"
S
t
a
n
d
a
r
d
 
a
n
a
l
y
t
i
c
s
 
E
T
L
 
r
e
p
l
a
c
e
m
e
n
t
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
D
B
 
→
 
W
e
b
h
o
o
k
s
"
,
 
w
h
a
t
:
 
"
O
p
e
r
a
t
i
o
n
a
l
 
t
a
b
l
e
 
→
 
C
D
C
 
→
 
t
o
p
i
c
 
→
 
w
e
b
h
o
o
k
 
f
a
n
o
u
t
.
 
C
u
s
t
o
m
e
r
s
 
s
u
b
s
c
r
i
b
e
 
t
o
 
c
h
a
n
g
e
s
 
v
i
a
 
y
o
u
r
 
p
u
b
l
i
c
 
A
P
I
.
"
,
 
e
x
:
 
"
S
t
r
i
p
e
 
e
v
e
n
t
s
,
 
S
h
o
p
i
f
y
 
w
e
b
h
o
o
k
s
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
D
B
 
→
 
A
I
 
E
m
b
e
d
d
i
n
g
 
S
t
o
r
e
"
,
 
w
h
a
t
:
 
"
P
o
s
t
g
r
e
s
 
→
 
C
D
C
 
→
 
e
m
b
e
d
d
i
n
g
 
m
o
d
e
l
 
→
 
v
e
c
t
o
r
 
D
B
.
 
K
e
e
p
s
 
R
A
G
 
k
n
o
w
l
e
d
g
e
 
b
a
s
e
s
 
f
r
e
s
h
 
a
s
 
s
o
u
r
c
e
 
d
a
t
a
 
e
v
o
l
v
e
s
.
"
,
 
e
x
:
 
"
C
h
a
t
G
P
T
-
o
n
-
y
o
u
r
-
d
o
c
s
,
 
i
n
t
e
r
n
a
l
 
A
I
 
s
e
a
r
c
h
.
"
 
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
 
P
i
p
e
l
i
n
e
s
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
C
o
m
m
o
n
 
C
D
C
 
p
i
p
e
l
i
n
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


 
 
 
 
 
 
 
 
O
n
c
e
 
y
o
u
 
h
a
v
e
 
C
D
C
,
 
e
v
e
r
y
 
&
l
d
q
u
o
;
k
e
e
p
 
t
h
i
s
 
o
t
h
e
r
 
s
y
s
t
e
m
 
i
n
 
s
y
n
c
 
w
i
t
h
 
t
h
e
 
D
B
&
r
d
q
u
o
;
 
p
r
o
b
l
e
m


 
 
 
 
 
 
 
 
b
e
c
o
m
e
s
 
a
 
o
n
e
-
l
i
n
e
 
c
o
n
s
u
m
e
r
.
 
F
i
v
e
 
p
i
p
e
l
i
n
e
s
 
t
h
a
t
 
s
h
o
w
 
u
p
 
i
n
 
n
e
a
r
l
y
 
e
v
e
r
y
 
m
o
d
e
r
n
 
s
t
a
c
k
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
6
 
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
P
I
P
E
L
I
N
E
S
.
m
a
p
(
(
p
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
p
.
n
a
m
e
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
0
.
9
2
r
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
{
p
.
n
a
m
e
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
-
m
u
t
e
d
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
{
p
.
w
h
a
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
 
S
D
 
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
 
4
 
}
}
>
E
X
 
·
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
 
}
}
>
{
p
.
e
x
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
7
_
C
D
C
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
d
e
m
o
"
,
 
l
a
b
e
l
:
 
"
W
a
t
c
h
 
I
t
 
F
l
o
w
"
,
 
i
c
o
n
:
 
<
D
a
t
a
b
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
D
C
D
e
m
o
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
p
i
p
e
l
i
n
e
s
"
,
 
l
a
b
e
l
:
 
"
R
e
a
l
 
P
i
p
e
l
i
n
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
P
i
p
e
l
i
n
e
s
 
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
W
h
y
 
i
s
 
C
D
C
 
s
t
r
i
c
t
l
y
 
b
e
t
t
e
r
 
t
h
a
n
 
d
u
a
l
-
w
r
i
t
i
n
g
 
f
r
o
m
 
t
h
e
 
a
p
p
l
i
c
a
t
i
o
n
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
I
t
 
u
s
e
s
 
l
e
s
s
 
c
o
d
e
.
"
,


 
 
 
 
 
 
 
 
"
D
u
a
l
-
w
r
i
t
e
 
i
s
n
'
t
 
a
t
o
m
i
c
 
a
c
r
o
s
s
 
t
h
e
 
t
w
o
 
s
y
s
t
e
m
s
.
 
C
D
C
 
t
r
e
a
t
s
 
t
h
e
 
D
B
 
l
o
g
 
a
s
 
t
h
e
 
s
i
n
g
l
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
 
—
 
r
e
p
l
a
y
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
 
e
v
e
n
t
u
a
l
 
c
o
n
s
i
s
t
e
n
c
y
.
"
,


 
 
 
 
 
 
 
 
"
C
D
C
 
i
s
 
f
a
s
t
e
r
.
"
,


 
 
 
 
 
 
 
 
"
I
t
'
s
 
r
e
q
u
i
r
e
d
 
b
y
 
P
o
s
t
g
r
e
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
I
f
 
t
h
e
 
a
p
p
 
w
r
i
t
e
s
 
t
o
 
D
B
,
 
t
h
e
n
 
t
o
 
t
h
e
 
s
e
a
r
c
h
 
i
n
d
e
x
,
 
a
 
c
r
a
s
h
 
b
e
t
w
e
e
n
 
t
h
e
 
t
w
o
 
l
e
a
v
e
s
 
t
h
e
m
 
d
i
v
e
r
g
e
n
t
.
 
C
D
C
 
c
o
n
s
u
m
e
s
 
t
h
e
 
D
B
'
s
 
a
l
r
e
a
d
y
-
c
o
m
m
i
t
t
e
d
 
l
o
g
;
 
r
e
p
l
a
y
 
o
r
 
r
e
t
r
y
 
a
l
w
a
y
s
 
c
o
n
v
e
r
g
e
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
i
c
h
 
D
B
 
f
e
a
t
u
r
e
 
d
o
e
s
 
D
e
b
e
z
i
u
m
 
t
y
p
i
c
a
l
l
y
 
r
e
a
d
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
S
Q
L
 
q
u
e
r
i
e
s
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
w
r
i
t
e
-
a
h
e
a
d
 
l
o
g
 
/
 
b
i
n
l
o
g
 
(
P
o
s
t
g
r
e
s
 
l
o
g
i
c
a
l
 
r
e
p
l
i
c
a
t
i
o
n
 
s
l
o
t
,
 
M
y
S
Q
L
 
b
i
n
l
o
g
,
 
M
o
n
g
o
 
o
p
l
o
g
)
.
"
,


 
 
 
 
 
 
 
 
"
T
r
i
g
g
e
r
 
f
u
n
c
t
i
o
n
s
 
o
n
l
y
.
"
,


 
 
 
 
 
 
 
 
"
B
a
c
k
u
p
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
C
D
C
 
c
o
n
n
e
c
t
o
r
s
 
t
a
p
 
t
h
e
 
D
B
'
s
 
o
w
n
 
r
e
p
l
i
c
a
t
i
o
n
 
m
e
c
h
a
n
i
s
m
,
 
s
o
 
t
h
e
 
e
v
e
n
t
s
 
c
a
p
t
u
r
e
d
 
a
r
e
 
t
h
e
 
s
a
m
e
 
o
n
e
s
 
r
e
p
l
i
c
a
s
 
u
s
e
.
 
N
o
 
a
p
p
l
i
c
a
t
i
o
n
 
c
o
d
e
 
c
h
a
n
g
e
s
 
n
e
e
d
e
d
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
S
e
a
r
c
h
 
i
n
d
e
x
 
l
a
g
 
i
s
 
8
0
0
m
s
.
 
A
 
u
s
e
r
 
p
o
s
t
s
 
t
h
e
n
 
i
m
m
e
d
i
a
t
e
l
y
 
s
e
a
r
c
h
e
s
 
a
n
d
 
d
o
e
s
n
'
t
 
s
e
e
 
t
h
e
i
r
 
p
o
s
t
.
 
B
e
s
t
 
f
i
x
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
M
a
k
e
 
C
D
C
 
s
y
n
c
.
"
,


 
 
 
 
 
 
 
 
"
R
e
a
d
-
y
o
u
r
-
w
r
i
t
e
s
 
f
o
r
 
t
h
e
 
w
r
i
t
e
r
:
 
s
e
r
v
e
 
t
h
e
i
r
 
p
o
s
t
-
s
e
a
r
c
h
 
r
e
a
d
s
 
f
r
o
m
 
t
h
e
 
p
r
i
m
a
r
y
 
D
B
 
f
o
r
 
a
 
s
h
o
r
t
 
w
i
n
d
o
w
,
 
w
h
i
l
e
 
e
v
e
r
y
o
n
e
 
e
l
s
e
 
s
t
i
l
l
 
h
i
t
s
 
t
h
e
 
s
e
a
r
c
h
 
i
n
d
e
x
.
"
,


 
 
 
 
 
 
 
 
"
D
i
s
a
b
l
e
 
C
D
C
.
"
,


 
 
 
 
 
 
 
 
"
A
d
d
 
m
o
r
e
 
r
e
p
l
i
c
a
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
C
D
C
 
w
i
l
l
 
a
l
w
a
y
s
 
l
a
g
 
a
 
b
i
t
.
 
R
e
a
d
-
y
o
u
r
-
w
r
i
t
e
s
 
r
o
u
t
e
s
 
t
h
e
 
w
r
i
t
e
r
'
s
 
r
e
a
d
s
 
t
o
 
f
r
e
s
h
 
s
t
a
t
e
 
f
o
r
 
a
 
b
r
i
e
f
 
w
i
n
d
o
w
.
 
O
t
h
e
r
 
u
s
e
r
s
 
t
o
l
e
r
a
t
e
 
e
v
e
n
t
u
a
l
 
c
o
n
s
i
s
t
e
n
c
y
 
c
h
e
a
p
l
y
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
a
t
'
s
 
a
 
c
o
m
m
o
n
 
p
i
t
f
a
l
l
 
w
h
e
n
 
a
d
d
i
n
g
 
a
 
C
D
C
 
c
o
n
s
u
m
e
r
 
t
o
 
a
n
 
e
x
i
s
t
i
n
g
 
K
a
f
k
a
 
t
o
p
i
c
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
D
i
s
k
 
f
i
l
l
s
 
u
p
.
"
,


 
 
 
 
 
 
 
 
"
F
o
r
g
e
t
t
i
n
g
 
t
h
a
t
 
t
h
e
 
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
 
w
i
l
l
 
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
 
l
a
t
e
s
t
 
o
f
f
s
e
t
 
a
n
d
 
m
i
s
s
 
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
 
s
t
a
t
e
 
—
 
y
o
u
 
t
y
p
i
c
a
l
l
y
 
n
e
e
d
 
a
 
b
a
c
k
f
i
l
l
 
f
r
o
m
 
a
 
s
n
a
p
s
h
o
t
 
f
i
r
s
t
,
 
t
h
e
n
 
a
t
t
a
c
h
 
t
o
 
t
h
e
 
l
i
v
e
 
s
t
r
e
a
m
.
"
,


 
 
 
 
 
 
 
 
"
I
t
'
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
 
e
x
p
e
c
t
e
d
.
"
,


 
 
 
 
 
 
 
 
"
E
n
c
r
y
p
t
i
o
n
 
b
r
e
a
k
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
 
+
 
'
l
a
t
e
s
t
'
 
o
f
f
s
e
t
 
=
 
i
t
 
k
n
o
w
s
 
n
o
t
h
i
n
g
 
a
b
o
u
t
 
p
r
e
-
e
x
i
s
t
i
n
g
 
r
o
w
s
.
 
S
t
a
n
d
a
r
d
 
p
a
t
t
e
r
n
:
 
s
n
a
p
s
h
o
t
 
t
h
e
 
t
a
b
l
e
,
 
i
n
g
e
s
t
 
t
h
e
 
s
n
a
p
s
h
o
t
,
 
t
h
e
n
 
a
t
t
a
c
h
 
t
o
 
C
D
C
 
a
t
 
t
h
e
 
s
n
a
p
s
h
o
t
'
s
 
W
A
L
 
p
o
s
i
t
i
o
n
.
 
D
e
b
e
z
i
u
m
 
d
o
e
s
 
t
h
i
s
 
a
u
t
o
m
a
t
i
c
a
l
l
y
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
C
h
a
n
g
e
 
D
a
t
a
 
C
a
p
t
u
r
e
"


 
 
 
 
 
 
l
e
v
e
l
=
{
7
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
5
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
 
'
h
o
w
 
d
o
 
y
o
u
 
k
e
e
p
 
s
e
a
r
c
h
/
c
a
c
h
e
/
w
a
r
e
h
o
u
s
e
 
i
n
 
s
y
n
c
 
w
i
t
h
 
t
h
e
 
D
B
'
 
a
n
s
w
e
r
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




