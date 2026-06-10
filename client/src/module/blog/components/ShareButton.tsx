
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
 
S
h
a
r
e
2
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
n
t
e
r
f
a
c
e
 
S
h
a
r
e
B
u
t
t
o
n
P
r
o
p
s
 
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


 
 
u
r
l
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
h
a
r
e
B
u
t
t
o
n
(
{


 
 
t
i
t
l
e
,


 
 
u
r
l
,


}
:
 
S
h
a
r
e
B
u
t
t
o
n
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
c
o
p
i
e
d
,
 
s
e
t
C
o
p
i
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
 
h
a
n
d
l
e
S
h
a
r
e
 
=
 
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


 
 
 
 
c
o
n
s
t
 
s
h
a
r
e
U
r
l
 
=


 
 
 
 
 
 
u
r
l
 
|
|
 
w
i
n
d
o
w
.
l
o
c
a
t
i
o
n
.
h
r
e
f
;




 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
i
f
 
(
n
a
v
i
g
a
t
o
r
.
s
h
a
r
e
)
 
{


 
 
 
 
 
 
 
 
a
w
a
i
t
 
n
a
v
i
g
a
t
o
r
.
s
h
a
r
e
(
{


 
 
 
 
 
 
 
 
 
 
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
 
s
h
a
r
e
U
r
l
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
;


 
 
 
 
 
 
}




 
 
 
 
 
 
a
w
a
i
t
 
n
a
v
i
g
a
t
o
r
.
c
l
i
p
b
o
a
r
d
.
w
r
i
t
e
T
e
x
t
(
s
h
a
r
e
U
r
l
)
;




 
 
 
 
 
 
s
e
t
C
o
p
i
e
d
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
 
{


 
 
 
 
 
 
 
 
s
e
t
C
o
p
i
e
d
(
f
a
l
s
e
)
;


 
 
 
 
 
 
}
,
 
2
0
0
0
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
o
r
)
 
{


 
 
 
 
 
 
c
o
n
s
o
l
e
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
s
h
a
r
e
 
a
r
t
i
c
l
e
:
"
,
 
e
r
r
o
r
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
2
 
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
h
a
n
d
l
e
S
h
a
r
e
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
2
 
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
 
b
o
r
d
e
r
 
p
x
-
4
 
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
2
0
0
 
$
{


 
 
 
 
 
 
 
 
c
o
p
i
e
d


 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
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


 
 
 
 
 
 
 
 
 
 
:
 
"
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
l
i
m
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
c
o
p
i
e
d
 
?
 
(


 
 
 
 
 
 
 
 
<
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
h
-
4
 
w
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
C
o
p
i
e
d


 
 
 
 
 
 
 
 
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
h
a
r
e
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
S
h
a
r
e


 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
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
b
u
t
t
o
n
>


 
 
)
;


}
